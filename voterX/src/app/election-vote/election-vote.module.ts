import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionVotePageRoutingModule } from './election-vote-routing.module';

import { ElectionVotePage } from './election-vote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionVotePageRoutingModule
  ],
  declarations: [ElectionVotePage]
})
export class ElectionVotePageModule {}
