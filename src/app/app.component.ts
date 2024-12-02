import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prima';
  mostrarHeaderFooter = true;
  constructor(private router: Router) {
    // Detecta cambios en la ruta
    this.router.events.subscribe(() => {
      // Actualiza el estado dependiendo de la ruta activa
      this.mostrarHeaderFooter = this.router.url !== '/bienvenida'; // Oculta para la página de bienvenida
    });
  }
}
