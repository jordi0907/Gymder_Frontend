import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymdertentPageRoutingModule } from './gymdertent-routing.module';

import { GymdertentPage } from './gymdertent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymdertentPageRoutingModule
  ],
  declarations: [GymdertentPage]
})
export class GymdertentPageModule {}
