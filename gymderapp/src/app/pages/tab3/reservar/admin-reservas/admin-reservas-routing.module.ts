import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminReservasPage } from './admin-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminReservasPageRoutingModule {}
