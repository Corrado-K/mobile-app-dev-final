import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ElectionService } from "../election.service";
import { ElectionCandidatesService } from "../election-candidates.service";





@Component({
  selector: 'app-election-candidates',
  templateUrl: './election-candidates.page.html',
  styleUrls: ['./election-candidates.page.scss'],
})
export class ElectionCandidatesPage implements OnInit {

  candidates = [];
  candidates_doc = [];

  cand: any;

  elect: any;

  constructor(private fire: AngularFirestore, private election: ElectionService, private electioncandidates: ElectionCandidatesService) { }

  ngOnInit() {
    this.fire.collection("Candidates").get().toPromise()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.candidates.push(doc.data());
          this.candidates_doc.push(doc.id);
          console.log(this.candidates);
          console.log(this.candidates_doc);
          
      });
    // console.log(this.organisations);
    });
    this.elect = this.election.electionName();
    // console.log(this.elect);
    
  }

  vote(obj){
  // console.log(obj);

  for (let index = 0; index < this.candidates.length; index++) {
    console.log(this.candidates[index].name);

    if (this.candidates[index].name === obj.name) {
      console.log(this.candidates_doc[index]);
      let docu:string = this.candidates_doc[index];
      
      this.fire.collection("Candidates").doc(docu).update({
        'votes':obj.votes+1
      }).then(()=>{
        console.log(this.cand.votes);
        console.log("Successfulllll");
        
      }).catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    }
  }
    
  // };
  this.electioncandidates.getcandidate(obj);
  this.electioncandidates.addVote(obj);
  console.log("Done");
   
  }

}
