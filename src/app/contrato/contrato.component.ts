import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ContratoService } from './../services/Contrato.service';
import { Contrato } from './../model/Contrato';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {
  ContratoService: any;
  contrato: Contrato;
  date: Date;
  title = 'sweetAlert';


  constructor(
    private router: Router,
    private http: HttpClient,
    private contratoDataService: ContratoService,
  ) { }



  ngOnInit() {
    this.contrato = new Contrato();
  }

  
  crearOActualizarContrato(contrato: Contrato) {
    this.contratoDataService.crearOActualizarContrato(this.contrato)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['Mensualidades']);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se creo con éxito'
      });
    });
    window.location.reload()
}
}
