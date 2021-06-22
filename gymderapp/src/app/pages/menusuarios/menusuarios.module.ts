import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenusuariosPageRoutingModule } from './menusuarios-routing.module';

import { MenusuariosPage } from './menusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenusuariosPageRoutingModule
  ],
  declarations: [MenusuariosPage]
})
export class MenusuariosPageModule {}
