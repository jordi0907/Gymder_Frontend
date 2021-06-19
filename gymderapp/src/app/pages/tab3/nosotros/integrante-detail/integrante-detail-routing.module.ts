import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegranteDetailPage } from './integrante-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IntegranteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegranteDetailPageRoutingModule {}
