import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ElectionCandidatesService {

  private data={
    election:'',
    message:'',
    name:'',
    position:'',
    votes:0
  };

  constructor(private firestore: AngularFirestore) { }

  getcandidate(item){

    this.data.name = item.name;
    this.data.election = item.election;
    this.data.position = item.position;
    this.data.message = item.message;
    this.data.votes = item.votes;

    console.log(this.data);
    // console.log(this.data['pin']);
  }

  getData(){
    return this.data;
  }

  candidateName(){
    return this.data['name'];
  }

  getVotes(){
    return this.data['votes'];
  }

  addVote(can){
    this.data.votes = can.votes+1;
  
  }
}
