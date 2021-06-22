import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuyosPage } from './tuyos.page';

const routes: Routes = [
  {
    path: '',
    component: TuyosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuyosPageRoutingModule {}
