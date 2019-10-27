import { Mantenimiento } from '../model/Mantenimiento';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getMantenimiento/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/mantenimiento';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteMantenimiento/';
@Injectable()

export class MantenimientoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarMantenimiento(): Observable<Mantenimiento[]> {
        return this.http.get<Mantenimiento[]>(API_URL);
    }
    crearOActualizarMantenimiento(mantenimiento: Mantenimiento): Observable<Mantenimiento[]> {
        return this.http.post<Mantenimiento[]>(API_URL_CREATE, mantenimiento);
    }
    delateMantenimiento(mantenimiento: Mantenimiento): Observable<Mantenimiento[]> {
        return this.http.post<Mantenimiento[]>(API_URL_DELATE, mantenimiento);
    }
}
