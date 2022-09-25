import { Component } from '@angular/core';
import { ServicioClima } from './servicio-clima.service';
import { ServicioConvertService } from './servicio-convert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Bitcoin
  title = 'bitcoin';

  dolar: any;
  bitcoin: any;
  valor: any;

  // Clima
  ciudad: any;
  temp: string = '';

  constructor(
    public convert: ServicioConvertService,
    public servicioClima: ServicioClima
  ) {}

  convertirBitcoin() {
    this.convert.getValue().subscribe((resp) => {
      console.log(JSON.stringify(resp));
      this.valor = resp;
      console.log(JSON.stringify(this.valor.USD)); // Obtiene la moneda

      this.dolar = this.bitcoin * parseFloat(this.valor.USD);
    });
  }
  convertirDolar() {
    this.convert.getValue().subscribe((resp) => {
      console.log(JSON.stringify(resp));
      this.valor = resp;
      console.log(JSON.stringify(this.valor.USD)); // Obtiene la moneda

      this.bitcoin = this.dolar / parseFloat(this.valor.USD);
    });
  }

  // NOTE: Obtiene clima
  respuesta: string = "";
  getClima() {
    console.log(this.ciudad);
    this.servicioClima.getClima(this.ciudad).subscribe(
      (resp) => {
        this.respuesta = JSON.stringify(resp.current.temp_c); // obtiene respuesta en string
        console.log('Respuesta: ' + this.respuesta);
        this.temp = this.respuesta + '°C'; // se muestra en pantalla
      },
      (err) => {
        if (err.status == 400) {
          alert("Pais no existe");
          this.temp = "";
          this.ciudad = "";
        }
      }
    );
  }
}
