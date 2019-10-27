import { Mensualidad } from './../model/Mensualidad';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})


export class ProveedorComponent implements OnInit {
  mensualidades: Observable<Mensualidad[]>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private mensualidadService: OrdenGastoService
  ) { }


  ngOnInit() {
    
    this.reloadData();
  
  }

  reloadData() {
    this.mensualidades = this.mensualidadService.getMensualidadesList();
    
  }


  deleteMensualidad(id: number) {
    this.mensualidadService.deleteMensualidad(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  mensualidadDetails(id: number){
    
    this.router.navigate(['detalle', id]);
  }

  mensualidadEdit(id: number){
    this.router.navigate(['editar', id]);
  }

     
}