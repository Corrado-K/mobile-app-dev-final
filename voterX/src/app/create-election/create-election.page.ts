import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.page.html',
  styleUrls: ['./create-election.page.scss'],
})
export class CreateElectionPage implements OnInit {

  name:string = '';
  pin:string = '';
  election_desc:string = '';


  

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  add(){
    let organisation = {
      name: this.name,
      pin: this.pin,
      election_desc:this.election_desc
    }
    this.firestore.collection("Organisation").add(organisation)
      .then (()=> {
        console.log(organisation);
        
      })
      .then(()=> {
        console.log("Done");
      })
  }

}
