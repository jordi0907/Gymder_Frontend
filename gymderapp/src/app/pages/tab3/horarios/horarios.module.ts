import { NgModule , LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariosPageRoutingModule } from './horarios-routing.module';
import { CalendarModule } from 'ion2-calendar';
import { HorariosPage } from './horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariosPageRoutingModule,
    CalendarModule
  ],
  declarations: [HorariosPage],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }]
})
export class HorariosPageModule {}
