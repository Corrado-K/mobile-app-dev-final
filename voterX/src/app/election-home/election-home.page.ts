import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ElectionService } from "../election.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-election-home',
  templateUrl: './election-home.page.html',
  styleUrls: ['./election-home.page.scss'],
})
export class ElectionHomePage implements OnInit {

  organisations = [];

  organisation : any ={
    name: "",
    pin: "",
    electiondesc:""
  };

  constructor(private fire: AngularFirestore,private election: ElectionService) { }

  ngOnInit() {
    this.fire.collection("Organisation").get().toPromise()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.organisations.push(doc.data());
      });
    // console.log(this.organisations);
    
    })
  }


  getelectionDetails(obj){
    this.election.getelection(obj);
    console.log(obj);    
    // location.href = '/election-pin';
    // console.log(this.election.data['pin']);
  }

  
  

}
