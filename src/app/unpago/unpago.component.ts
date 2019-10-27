import { Contado } from './../model/Contado';
import { PagoService } from './../services/Pago.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Router } from '@angular/router';



@Component({
  selector: 'app-unpago',
  templateUrl: './unpago.component.html',
  styleUrls: ['./unpago.component.scss']
})
export class UnpagoComponent implements OnInit {
  contados: Observable<Contado[]>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private contadoService: PagoService,
  ) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.contados = this.contadoService.getContadosList();
    
  }
  deleteContado(id: number) {
    this.contadoService.deleteContado(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  contadoDetails(id: number){ 
    this.router.navigate(['detalle-contado', id]);
  }

  contadoEdit(id: number){
    this.router.navigate(['editar-contado', id]);
  }

     
}
