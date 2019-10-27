import { HttpClient } from '@angular/common/http';
import { DetalleCalculos } from './../model/DetalleCalculo';
import { DetalleCalculoService } from './../services/DetalleCalculo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-calculo',
  templateUrl: './detalle-calculo.component.html',
  styleUrls: ['./detalle-calculo.component.scss']
})
export class DetalleCalculoComponent implements OnInit {
 DetalleCalculoService: any;
 detalleCalculo: DetalleCalculos;
 date: Date;
  constructor(
    private router: Router,
    private http: HttpClient,
    private detalleCalculoDataService: DetalleCalculoService,
  ) { }

  ngOnInit() {
    this.detalleCalculo = new DetalleCalculos();
  }
  crearOActualizarDetalleCalculo(detalleCalculo: DetalleCalculos) {
    this.detalleCalculoDataService.crearOActualizarDetalleCalculo(this.detalleCalculo)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['cancelar']);
      alert( 'enviado' );
    });
}
}
