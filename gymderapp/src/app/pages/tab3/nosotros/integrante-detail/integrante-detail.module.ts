import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegranteDetailPageRoutingModule } from './integrante-detail-routing.module';

import { IntegranteDetailPage } from './integrante-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegranteDetailPageRoutingModule
  ],
  declarations: [IntegranteDetailPage]
})
export class IntegranteDetailPageModule {}
