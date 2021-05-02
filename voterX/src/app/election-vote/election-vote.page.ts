import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ElectionService } from "../election.service";
import { ElectionCandidatesService } from "../election-candidates.service";



@Component({
  selector: 'app-election-vote',
  templateUrl: './election-vote.page.html',
  styleUrls: ['./election-vote.page.scss'],
})
export class ElectionVotePage implements OnInit {

  cand: any;
  candidates = [];
  candidates_doc = [];

  candidate : any ={
    name: "",
    position: "",
    message: "",
    election:"",
    votes:0
  };

  constructor(private fire: AngularFirestore, private election: ElectionService, private electioncandidate: ElectionCandidatesService) { }

  ngOnInit() {
    this.fire.collection("Candidates").get().toPromise()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.candidates.push(doc.data());
          this.candidates_doc.push(doc.id);
      });
    // console.log(this.organisations);
    });
    this.cand = this.electioncandidate.getData();
    console.log("Cand: ");
     
    console.log(this.cand);
    

    // for (let index = 0; index < this.candidates.length; index++) {
    //   console.log(this.candidates[index]);
      
    //   if (this.candidates[index].name === this.cand.name) {
    //     this.fire.collection("Candidate").doc(this.candidates_doc[index]).update({
    //       'votes':this.cand.votes
    //     }).then(()=>{
    //       console.log(this.cand.votes);
    //       console.log("Success");
          
    //     })
    //   }
      
    // }
    //this.cand = this.electioncandidate.candidateName();
    //console.log(this.elect);
    // console.log(this.electioncandidate.getData());
    
    
  }

}
