import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CertificadoPresupuestario } from '../model/CertificadoPresupuestario';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/getCertificado/';
const API_URL_CREATE = 'http://localhost:8080saveOrUpdateCertificado';
const API_URL_DELATE = 'http://localhost:8080/deleteCertificado/';
@Injectable()

export class CertificadoPresupuestarioService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarCertificado(): Observable<CertificadoPresupuestario[]> {
        return this.http.get<CertificadoPresupuestario[]>(API_URL);
    }
    crearOActualizarCertificado(certificadoPresupuestario: CertificadoPresupuestario): Observable<CertificadoPresupuestario[]> {
        return this.http.post<CertificadoPresupuestario[]>(API_URL_CREATE, certificadoPresupuestario);
    }
    delateCertificado(certificadoPresupuestario: CertificadoPresupuestario): Observable<CertificadoPresupuestario[]> {
        return this.http.post<CertificadoPresupuestario[]>(API_URL_DELATE, certificadoPresupuestario);
    }
}
