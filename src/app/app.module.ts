import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RedSquareComponent } from './components/red-square/red-square.component';
import { GreenSquareComponent } from './components/green-square/green-square.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { TodayComponent } from './components/today/today.component';
import { NoiseComponent } from './components/noise/noise.component';
import { StudentComponent } from './components/student/student.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProductsComponent } from './components/products/products.component';
import { AdiComponent } from './componenets/adi/adi.component'

@NgModule({
  declarations: [
    AppComponent,
    RedSquareComponent,
    GreenSquareComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    TodayComponent,
    NoiseComponent,
    StudentComponent,
    CrudComponent,
    ProductsComponent,
    AdiComponent
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
