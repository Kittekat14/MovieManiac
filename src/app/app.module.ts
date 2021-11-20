import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // responsible for the DOM and needed for Web Applications (not Mobile/Desktop)
    HttpClientModule, // responsible for http requests
    AppRoutingModule // responsible for Routing
  ],
  providers: [], // to declare another provider other than root-app
  bootstrap: [AppComponent]
})
export class AppModule { }
