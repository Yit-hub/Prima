import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  images = [
    'https://prima.es/wp-content/themes/prima/assets/images/ket.png',
    'https://prima.es/wp-content/themes/prima/assets/images/mos.png',
    'https://prima.es/wp-content/themes/prima/assets/images/may.png'
  ];
  colors = ['#FF0000', '#0047AB', '#f0c424'];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Cambiar cada 3 segundos
  }
}
