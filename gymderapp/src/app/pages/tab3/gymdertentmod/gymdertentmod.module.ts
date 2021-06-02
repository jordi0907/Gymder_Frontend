import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymdertentmodPageRoutingModule } from './gymdertentmod-routing.module';

import { GymdertentmodPage } from './gymdertentmod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymdertentmodPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GymdertentmodPage]
})
export class GymdertentmodPageModule {}
