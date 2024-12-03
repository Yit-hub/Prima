import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ketchup',
  templateUrl: './ketchup.component.html',
  styleUrls: ['./ketchup.component.scss']
})
export class KetchupComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  ingredientes: string[] = [];
  valorEnergetico: string = '';
  grasas: string = '';
  grasasSaturadas: string = '';
  hidratosDeCarbono: string = '';
  azucares: string = '';
  proteinas: string = '';
  sal: string = '';
  envases: string[] = [];
  peso: string = '';

  // Inyecta HttpClient para hacer la solicitud HTTP
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarKetchupData();  // Cargar los datos al iniciar el componente
  }

  // Método para cargar los datos desde el archivo JSON
  cargarKetchupData() {
    // Ruta al archivo JSON
    const url = 'assets/json/ketchup.json';

    this.http.get<any>(url).subscribe(data => {
      // Asigna cada parte de los datos a las variables correspondientes
      this.nombre = data.nombre;
      this.descripcion = data.descripcion;
      this.ingredientes = data.ingredientes;
      this.valorEnergetico = data.informacion_nutricional.valor_energetico;
      this.grasas = data.informacion_nutricional.grasas;
      this.grasasSaturadas = data.informacion_nutricional.grasas_saturadas;
      this.hidratosDeCarbono = data.informacion_nutricional.hidratos_de_carbono;
      this.azucares = data.informacion_nutricional.azucares;
      this.proteinas = data.informacion_nutricional.proteinas;
      this.sal = data.informacion_nutricional.sal;
      this.envases = data.envases;
      this.peso = data.peso;
    });
  }
}
