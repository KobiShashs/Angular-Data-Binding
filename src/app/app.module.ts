import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RedSquareComponent } from './components/red-square/red-square.component';
import { GreenSquareComponent } from './components/green-square/green-square.component'

@NgModule({
  declarations: [
    AppComponent,
    RedSquareComponent,
    GreenSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
