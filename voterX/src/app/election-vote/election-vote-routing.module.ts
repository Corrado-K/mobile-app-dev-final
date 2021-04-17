import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionVotePage } from './election-vote.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionVotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionVotePageRoutingModule {}
