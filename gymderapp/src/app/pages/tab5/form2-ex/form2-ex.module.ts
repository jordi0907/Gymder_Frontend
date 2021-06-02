import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form2ExPageRoutingModule } from './form2-ex-routing.module';

import { Form2ExPage } from './form2-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form2ExPageRoutingModule
  ],
  declarations: [Form2ExPage]
})
export class Form2ExPageModule {}
