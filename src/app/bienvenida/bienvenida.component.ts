import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent {
  buttonClicked = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.buttonClicked = true; 
    this.router.navigate(['/inicio']); 
  }
}
