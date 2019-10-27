import { HistorialEmpleado } from './../model/HistorialEmpleado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getHistorialEmpleados/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdateHistorialEmpleados';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteHistorialEmpleados/';
@Injectable()

export class HistorialEmpleadoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarHistorialEmpleado(): Observable<HistorialEmpleado[]> {
        return this.http.get<HistorialEmpleado[]>(API_URL);
    }

    crearOActualizarHistorialEmpleado(historialEmpleado: HistorialEmpleado): Observable<HistorialEmpleado[]> {
        return this.http.post<HistorialEmpleado[]>(API_URL_CREATE, historialEmpleado);
    }

    delateHIstorialEmpleado(historialEmpleado: HistorialEmpleado): Observable<HistorialEmpleado[]> {
        return this.http.post<HistorialEmpleado[]>(API_URL_DELATE, historialEmpleado);
    }
}
