import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'election-home',
    loadChildren: () => import('./election-home/election-home.module').then( m => m.ElectionHomePageModule)
  },
  {
    path: 'election-pin',
    loadChildren: () => import('./election-pin/election-pin.module').then( m => m.ElectionPinPageModule)
  },
  {
    path: 'election-candidates',
    loadChildren: () => import('./election-candidates/election-candidates.module').then( m => m.ElectionCandidatesPageModule)
  },
  {
    path: 'election-vote',
    loadChildren: () => import('./election-vote/election-vote.module').then( m => m.ElectionVotePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
