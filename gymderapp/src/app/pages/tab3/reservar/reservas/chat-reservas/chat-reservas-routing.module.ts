import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatReservasPage } from './chat-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: ChatReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatReservasPageRoutingModule {}
