import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionHomePage } from './election-home.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionHomePageRoutingModule {}
