import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { PrimaceroComponent } from './primacero/primacero.component';
import { FoodserviceComponent } from './foodservice/foodservice.component';
import { SostenibilidadComponent } from './sostenibilidad/sostenibilidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { KetchupComponent } from './ketchup/ketchup.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'cero', component: PrimaceroComponent},
  { path: 'foodservice', component: FoodserviceComponent},
  { path: 'sostenibilidad', component: SostenibilidadComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'ketchup', component: KetchupComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
