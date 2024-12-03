import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { PrimaceroComponent } from './primacero/primacero.component';
import { FoodserviceComponent } from './foodservice/foodservice.component';
import { SostenibilidadComponent } from './sostenibilidad/sostenibilidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { KetchupComponent } from './ketchup/ketchup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    PrimaceroComponent,
    FoodserviceComponent,
    SostenibilidadComponent,
    ContactoComponent,
    InicioComponent,
    BienvenidaComponent,
    KetchupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
