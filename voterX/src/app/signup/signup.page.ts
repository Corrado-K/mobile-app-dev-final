import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  firstname:string = '';
  lastname: string = '';
  email:string = '';
  password: string = '';
  repassword: string = '';
  attempts: number = 0;


  // Regex & Validation
  password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
  email_regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;


  // User details validation
  firstname_valid:boolean = false;
  lastname_valid:boolean = false;
  email_valid:boolean = false;
  password_valid:boolean = false;
  repassword_valid:boolean = false;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  createAccount() {
    console.log("funny");
    
    this.attempts = this.attempts + 1;

    if(this.firstname.length > 3 && this.firstname.length < 20) {
      this.firstname_valid = true;
    } else {this.firstname_valid = false;}

    if(this.repassword === this.password) {
      this.repassword_valid = true;
    }else {this.repassword_valid = false}

    this.password_valid = this.password_regex.test(this.password);

    this.email_valid = this.email_regex.test(this.email)

    if(this.lastname.length > 3 && this.lastname.length < 20) {
      this.lastname_valid = true;
    }else {this.lastname_valid = false}


    if(this.firstname_valid && this.lastname_valid && this.email_valid && this.password_valid && this.repassword_valid) {
      let user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      }
      this.firestore.collection("Users").add(user)
      .then (()=> {
        this.auth.createUserWithEmailAndPassword(this.email, this.password)
      })
      .then(()=> {
        console.log("Done");
      })

    }


    
    
  }

}
