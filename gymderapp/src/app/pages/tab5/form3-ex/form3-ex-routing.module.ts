import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form3ExPage } from './form3-ex.page';

const routes: Routes = [
  {
    path: '',
    component: Form3ExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form3ExPageRoutingModule {}
