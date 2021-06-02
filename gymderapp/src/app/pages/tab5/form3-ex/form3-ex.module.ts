import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form3ExPageRoutingModule } from './form3-ex-routing.module';

import { Form3ExPage } from './form3-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form3ExPageRoutingModule
  ],
  declarations: [Form3ExPage]
})
export class Form3ExPageModule {}
