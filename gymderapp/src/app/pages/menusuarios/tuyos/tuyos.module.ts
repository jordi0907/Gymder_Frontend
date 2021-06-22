import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuyosPageRoutingModule } from './tuyos-routing.module';

import { TuyosPage } from './tuyos.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuyosPageRoutingModule,
    PipesModule
  ],
  declarations: [TuyosPage]
})
export class TuyosPageModule {}
