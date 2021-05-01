import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.page.html',
  styleUrls: ['./create-candidate.page.scss'],
})
export class CreateCandidatePage implements OnInit {

  name:string = '';
  message:string = '';
  election:string = '';
  position:string = '';
  votes:number = 0;

  

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  add(){
    let candidate = {
      name: this.name,
      message: this.message,
      election:this.election,
      position: this.position,
      votes: this.votes
    }
    this.firestore.collection("Candidates").add(candidate)
      .then (()=> {
        console.log(candidate);
        
      })
      .then(()=> {
        console.log("Done");
      })
  }

}
