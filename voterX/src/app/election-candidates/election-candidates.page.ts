import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ElectionService } from "../election.service";




@Component({
  selector: 'app-election-candidates',
  templateUrl: './election-candidates.page.html',
  styleUrls: ['./election-candidates.page.scss'],
})
export class ElectionCandidatesPage implements OnInit {

  candidates = [];

  elect: any;

  candidate : any ={
    name: "",
    position: "",
    message: "",
    election:""
  };

  constructor(private fire: AngularFirestore, private election: ElectionService) { }

  ngOnInit() {
    this.fire.collection("Candidates").get().toPromise()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.candidates.push(doc.data());
      });
    // console.log(this.organisations);
    });
    this.elect = this.election.electionName();
    console.log(this.elect);
    
  }

  vote(object){
   // this.candidate.addVote(obj);
   //console.log("Done");
   
  }

}
