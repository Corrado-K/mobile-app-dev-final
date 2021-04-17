import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionCandidatesPage } from './election-candidates.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionCandidatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionCandidatesPageRoutingModule {}
