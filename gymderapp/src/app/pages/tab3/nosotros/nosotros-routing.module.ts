import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosotrosPage } from './nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: NosotrosPage
  },
  {
    path: 'integrante-detail',
    loadChildren: () => import('./integrante-detail/integrante-detail.module').then( m => m.IntegranteDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosotrosPageRoutingModule {}
