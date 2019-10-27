import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



const httpconf = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };
@Injectable()

export class PagoService {
    private baseUrl = 'http://localhost:8080/espe/api/contados';

    constructor( private http: HttpClient ) { }


    getContado(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createContado(contado: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, contado);
    }
  
    updateContado(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
  
    deleteContado(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
    getContadosList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }

}
