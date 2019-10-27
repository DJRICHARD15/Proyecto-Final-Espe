import { Contrato } from './../model/Contrato';
import { Proveedor } from '../model/Proovedor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getProveedor/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/proveedor';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteProveedor/';
const API_URLR = 'http://localhost:8080/getContrato/';
@Injectable()

export class ProveedorService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarProveedor(): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(API_URL);
    }
    crearOActualizarProveedor(proveedor: Proveedor): Observable<Proveedor[]> {
        return this.http.post<Proveedor[]>(API_URL_CREATE, proveedor);
    }
    delateProveedor(proveedor: Proveedor): Observable<Proveedor[]> {
        return this.http.post<Proveedor[]>(API_URL_DELATE, proveedor);
    }

    buscarContrato(): Observable<Contrato[]> {
        return this.http.get<Contrato[]>(API_URLR);
    }
}
