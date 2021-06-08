import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasPage } from './reservas.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasPage
  },  {
    path: 'chat-reservas',
    loadChildren: () => import('./chat-reservas/chat-reservas.module').then( m => m.ChatReservasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasPageRoutingModule {}
