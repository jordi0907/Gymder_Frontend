import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymdertentmodPage } from './gymdertentmod.page';

const routes: Routes = [
  {
    path: '',
    component: GymdertentmodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymdertentmodPageRoutingModule {}
