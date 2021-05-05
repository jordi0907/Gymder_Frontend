import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarPage } from './reservar.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarPage
  },
  {
    path: 'detalles',
    //loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarPageRoutingModule {}
