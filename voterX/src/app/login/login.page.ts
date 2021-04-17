import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = '';
  password:string = '';
  isSuccess:boolean = false;
  attempts:number = 5;
  isDisable:boolean = false;
  errMessage:string = '';

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
    // this.auth.onAuthStateChanged(user => {
    //   if(user) {
    //     location.href = '/login';
    //   }
    // });
  }

  login(){
    if(this.attempts > 0) {
      this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.isSuccess = true;
        location.href = '/election-home';
      })
      .catch(err => {
        this.attempts = this.attempts - 1;
        this.isSuccess = false;
        this.errMessage = err.message;
      })
    } else {
      this.errMessage = "Try again in 10s";
      this.isDisable = true;
      setTimeout(()=> {
        this.isDisable = false;
        this.email = null;
        this.password = null;
        this.attempts = 5;
      }, 10000)
    }
  }
}
