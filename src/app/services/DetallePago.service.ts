import { Detalle_Pago } from '../model/DetallePago';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getDetallePago/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/detallePagp';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteDetallePago/';
@Injectable()

export class DetallePagoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDetallePago(): Observable<Detalle_Pago[]> {
        return this.http.get<Detalle_Pago[]>(API_URL);
    }

    crearOActualizarDetallePago(detalle_Pago: Detalle_Pago): Observable<Detalle_Pago[]> {
        return this.http.post<Detalle_Pago[]>(API_URL_CREATE, detalle_Pago);
    }

    delateDetallePago(detalle_Pago: Detalle_Pago): Observable<Detalle_Pago[]> {
        return this.http.post<Detalle_Pago[]>(API_URL_DELATE, detalle_Pago);
    }
}
