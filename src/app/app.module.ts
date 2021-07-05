import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppStoreModule } from '@core/ng-features';
import { FooterModule, HeaderModule, NotificationModule } from '@core/components';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslationModule } from './translation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslationModule,
    AppStoreModule,

    HeaderModule,
    FooterModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
