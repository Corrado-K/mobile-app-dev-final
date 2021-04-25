import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ElectionService } from "../election.service";



@Component({
  selector: 'app-election-vote',
  templateUrl: './election-vote.page.html',
  styleUrls: ['./election-vote.page.scss'],
})
export class ElectionVotePage implements OnInit {

  constructor(private fire: AngularFirestore, private election: ElectionService) { }

  ngOnInit() {
  }

}
