import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private data={
    name:'',
    pin:'',
    election_desc:''
  };

  constructor() { }

  getelection(item){

    this.data.name = item.name;
    this.data.pin = item.pin;
    this.data.election_desc = item.election_desc;

    console.log(this.data);
    // console.log(this.data['pin']);
  }

  getData(){
    return this.data;
  }

  electionPin(){
    return this.data['pin'];
  }

  electionName(){
    return this.data['election_desc'];
  }

  electionDetail(){
    return this.data;
  }

}
