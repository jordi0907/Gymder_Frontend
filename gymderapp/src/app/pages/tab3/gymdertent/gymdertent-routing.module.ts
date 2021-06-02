import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymdertentPage } from './gymdertent.page';

const routes: Routes = [
  {
    path: '',
    component: GymdertentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymdertentPageRoutingModule {}
