import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5Page } from './tab5.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  },
  {
    path: 'form1-ex',
    loadChildren: () => import('./form1-ex/form1-ex.module').then( m => m.Form1ExPageModule)
  },
  {
    path: 'form2-ex',
    loadChildren: () => import('./form2-ex/form2-ex.module').then( m => m.Form2ExPageModule)
  },
  {
    path: 'form3-ex',
    loadChildren: () => import('./form3-ex/form3-ex.module').then( m => m.Form3ExPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule {}
