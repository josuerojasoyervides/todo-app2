import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ApiInterceptor } from "./core/interceptors/api.interceptor";
import { PokeballButtonComponent } from './shared/buttons/pokeball-button/pokeball-button.component';
import { CardComponent } from './shared/cards/card/card.component';
import { AddButtonComponent } from './shared/buttons/add-button/add-button.component';
import { SubstractButtonComponent } from './shared/buttons/substract-button/substract-button.component'
@NgModule({
  declarations: [
    AppComponent,
    PokeballButtonComponent,
    CardComponent,
    AddButtonComponent,
    SubstractButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
