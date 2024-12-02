import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SomosComponent } from './somos/somos.component';
import { ProductosComponent } from './productos/productos.component';
import { PrimaceroComponent } from './primacero/primacero.component';
import { FoodserviceComponent } from './foodservice/foodservice.component';
import { SostenibilidadComponent } from './sostenibilidad/sostenibilidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticaComponent } from './politica/politica.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SomosComponent,
    ProductosComponent,
    PrimaceroComponent,
    FoodserviceComponent,
    SostenibilidadComponent,
    ContactoComponent,
    PoliticaComponent,
    InicioComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
