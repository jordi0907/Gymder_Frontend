import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiltPage } from './perfilt.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiltPageRoutingModule {}
