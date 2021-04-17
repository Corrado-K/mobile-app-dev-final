import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionHomePageRoutingModule } from './election-home-routing.module';

import { ElectionHomePage } from './election-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionHomePageRoutingModule
  ],
  declarations: [ElectionHomePage]
})
export class ElectionHomePageModule {}
