import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigoDetailPage } from './amigo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AmigoDetailPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmigoDetailPageRoutingModule {}
