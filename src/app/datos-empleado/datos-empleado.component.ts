import { Login } from './../model/Login';

import { HttpClient } from '@angular/common/http';
import { DatosEmpleadoService } from './../services/DatosEmpleado.service';
import { DatosEmpleado } from './../model/DatosEmpleado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/Login.service';


@Component({
  selector: 'app-datos-empleado',
  templateUrl: './datos-empleado.component.html',
  styleUrls: ['./datos-empleado.component.scss']
})
export class DatosEmpleadoComponent implements OnInit {
  DatosEmpleadoService: any;
  datosEmpleado: DatosEmpleado;
  date: Date;
  constructor(
    private router: Router,
    private http: HttpClient,
    private datosEmpleadoDataService: DatosEmpleadoService,
    private loginDataService: LoginService,
  ) { }

  ngOnInit() {
    this.datosEmpleado = new DatosEmpleado();
  }
  crearOActualizarDatosEmpleado(datosEmpleado: DatosEmpleado) {
    this.datosEmpleadoDataService.crearOActualizarDatosEmpleado(this.datosEmpleado)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['proveedor']);
      alert( 'enviado' );
    });
  }
}
