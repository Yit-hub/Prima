import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomosComponent } from './somos/somos.component';
import { ProductosComponent } from './productos/productos.component';
import { PrimaceroComponent } from './primacero/primacero.component';
import { FoodserviceComponent } from './foodservice/foodservice.component';
import { SostenibilidadComponent } from './sostenibilidad/sostenibilidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticaComponent } from './politica/politica.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'somos', component: SomosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'cero', component: PrimaceroComponent},
  { path: 'foodservice', component: FoodserviceComponent},
  { path: 'sostenibilidad', component: SostenibilidadComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'politica', component: PoliticaComponent},
  { path: 'bienvenida', component: BienvenidaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
