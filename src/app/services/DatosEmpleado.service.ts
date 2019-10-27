import { DatosEmpleado } from '../model/DatosEmpleado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getDatosEmpleados/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdateDatosEmpleados';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteDatosEmpleados/';
@Injectable()

export class DatosEmpleadoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDatosEmpleado(): Observable<DatosEmpleado[]> {
        return this.http.get<DatosEmpleado[]>(API_URL);
    }
    crearOActualizarDatosEmpleado(datosEmpleado: DatosEmpleado): Observable<DatosEmpleado[]> {
        return this.http.post<DatosEmpleado[]>(API_URL_CREATE, datosEmpleado);
    }
    delateDatosEmpleado(datosEmpleado: DatosEmpleado): Observable<DatosEmpleado[]> {
        return this.http.post<DatosEmpleado[]>(API_URL_DELATE, datosEmpleado);
    }
}
