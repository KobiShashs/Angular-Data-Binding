import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NoiseComponent } from './components/noise/noise.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';


const routes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'noise', component: NoiseComponent},
 {path: 'crud', component: CrudComponent},
 {path: 'products', component: ProductsComponent},
 {path: 'single-product/:id',component: SingleProductComponent},
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
