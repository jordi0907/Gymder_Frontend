import { NgModule , LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariosPageRoutingModule } from './horarios-routing.module';

import { NgCalendarModule } from 'ionic2-calendar';
import { HorariosPage } from './horarios.page';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariosPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [HorariosPage],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }]
})
export class HorariosPageModule {}
