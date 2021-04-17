import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionPinPageRoutingModule } from './election-pin-routing.module';

import { ElectionPinPage } from './election-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionPinPageRoutingModule
  ],
  declarations: [ElectionPinPage]
})
export class ElectionPinPageModule {}
