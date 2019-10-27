import { DetalleCalculos } from '../model/DetalleCalculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const URL = 'http://localhost:8080/gestionPagos/';
const API_URL = URL + 'getDetalleCalculo/';
const API_URL_CREATE = URL + 'saveOrUpdate/detalleCalculo';
const API_URL_DELATE = URL + 'deleteDetalleCalculo/';
@Injectable()

export class DetalleCalculoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }

    // buscarDetalleCalculo(): Observable<DetalleCalculo[]> {
    //     return this.http.get<DetalleCalculo[]>(API_URL);
    // }
    crearOActualizarDetalleCalculo(detalleCalculo: DetalleCalculos ): any {
         console.log('detalleCalculos, ordenGastos', detalleCalculo )
        return this.http.post(API_URL_CREATE, JSON.stringify ( {detalleCalculo} ));
    }

    // delateDetalleCalculo(detalle_Calculo: Detalle_Calculo): Observable<Detalle_Calculo[]> {
    //     return this.http.post<Detalle_Calculo[]>(API_URL_DELATE, detalle_Calculo);
    // }
}
