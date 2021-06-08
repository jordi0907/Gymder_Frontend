import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatReservasPageRoutingModule } from './chat-reservas-routing.module';

import { ChatReservasPage } from './chat-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatReservasPageRoutingModule
  ],
  declarations: [ChatReservasPage]
})
export class ChatReservasPageModule {}
