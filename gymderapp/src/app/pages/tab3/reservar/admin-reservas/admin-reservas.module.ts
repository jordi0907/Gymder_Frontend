import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminReservasPageRoutingModule } from './admin-reservas-routing.module';

import { AdminReservasPage } from './admin-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminReservasPageRoutingModule
  ],
  declarations: [AdminReservasPage]
})
export class AdminReservasPageModule {}
