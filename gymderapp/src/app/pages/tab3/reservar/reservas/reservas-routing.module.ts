import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasPage } from './reservas.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasPage
  },
  {
    path: 'sala/:id',
    loadChildren: () => import('./sala/sala.module').then( m => m.SalaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasPageRoutingModule {}
