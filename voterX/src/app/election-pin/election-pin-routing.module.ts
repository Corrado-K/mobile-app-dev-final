import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionPinPage } from './election-pin.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionPinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionPinPageRoutingModule {}
