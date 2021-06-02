import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form2ExPage } from './form2-ex.page';

const routes: Routes = [
  {
    path: '',
    component: Form2ExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form2ExPageRoutingModule {}
