import { Component, OnInit } from '@angular/core';
import { ElectionService } from "../election.service";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular'



@Component({
  selector: 'app-election-pin',
  templateUrl: './election-pin.page.html',
  styleUrls: ['./election-pin.page.scss'],
})
export class ElectionPinPage implements OnInit {

  pin: any;

  constructor(private election: ElectionService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    // let pin = this.election.electionPin();
    console.log(this.election.getData());
    
    console.log(this.election.electionPin());
    console.log("fire");
    
    
  }

  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Please enter the right PIN set by your organization ',
      buttons: ['OK']
    });

    await alert.present();
  }

  validatePin(){
    if(this.pin === this.election.electionPin()){
      this.router.navigate(['election-candidates']);
    }
    else{
      this.presentAlert();

    }
  }
  
}



