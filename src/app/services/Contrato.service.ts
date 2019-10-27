import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Contrato } from '../model/Contrato';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/getContrato/';
const API_URL_CREATE = 'http://localhost:8080/saveOrUpdateContrato';
const API_URL_DELATE = 'http://localhost:8080/deleteContarto/';
@Injectable()

export class ContratoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarContrato(): Observable<Contrato[]> {
        return this.http.get<Contrato[]>(API_URL);
    }

    crearOActualizarContrato(contrato: Contrato): Observable<Contrato[]> {
        return this.http.post<Contrato[]>(API_URL_CREATE, contrato);
    }
    delateContrato(contrato: Contrato): Observable<Contrato[]> {
        return this.http.post<Contrato[]>(API_URL_DELATE, contrato);
    }
}
