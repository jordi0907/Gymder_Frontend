import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivchatPage } from './privchat.page';

const routes: Routes = [
  {
    path: '',
    component: PrivchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivchatPageRoutingModule {}
