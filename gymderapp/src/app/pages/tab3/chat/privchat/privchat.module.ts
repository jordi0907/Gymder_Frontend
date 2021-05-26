import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivchatPageRoutingModule } from './privchat-routing.module';

import { PrivchatPage } from './privchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivchatPageRoutingModule
  ],
  declarations: [PrivchatPage]
})
export class PrivchatPageModule {}
