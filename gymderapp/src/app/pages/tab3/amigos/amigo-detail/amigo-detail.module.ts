import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmigoDetailPageRoutingModule } from './amigo-detail-routing.module';

import { AmigoDetailPage } from './amigo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmigoDetailPageRoutingModule
  ],
  declarations: [AmigoDetailPage]
})
export class AmigoDetailPageModule {}
