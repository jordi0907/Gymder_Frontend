import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form1ExPageRoutingModule } from './form1-ex-routing.module';

import { Form1ExPage } from './form1-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form1ExPageRoutingModule
  ],
  declarations: [Form1ExPage]
})
export class Form1ExPageModule {}
