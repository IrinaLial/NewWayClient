import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import {AuthService} from "./service/auth.service";
import {TripService} from "./service/trip.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthService,
    TripService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
