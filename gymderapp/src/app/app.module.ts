import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot() ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
