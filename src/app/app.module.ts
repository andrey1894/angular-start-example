import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppStoreModule } from '@core/ng-features';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterModule, HeaderModule, NotificationModule } from '@core/components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,

    HeaderModule,
    FooterModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
