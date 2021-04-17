import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionCandidatesPageRoutingModule } from './election-candidates-routing.module';

import { ElectionCandidatesPage } from './election-candidates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionCandidatesPageRoutingModule
  ],
  declarations: [ElectionCandidatesPage]
})
export class ElectionCandidatesPageModule {}
