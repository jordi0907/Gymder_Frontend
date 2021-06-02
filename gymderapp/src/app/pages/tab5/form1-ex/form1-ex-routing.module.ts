import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form1ExPage } from './form1-ex.page';

const routes: Routes = [
  {
    path: '',
    component: Form1ExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form1ExPageRoutingModule {}
