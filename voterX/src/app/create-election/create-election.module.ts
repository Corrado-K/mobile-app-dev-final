import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateElectionPageRoutingModule } from './create-election-routing.module';

import { CreateElectionPage } from './create-election.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateElectionPageRoutingModule
  ],
  declarations: [CreateElectionPage]
})
export class CreateElectionPageModule {}
