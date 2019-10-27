import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";

const httpconf = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };

@Injectable()

export class OrdenGastoService {
    private baseUrl = 'http://localhost:8080/espe/api/mensualidades';
    constructor(private http: HttpClient, ) { }

    getMensualidad(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createMensualidad(mensualidad: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, mensualidad);
    }
  
    updateMensualidad(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
  
    deleteMensualidad(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
    getMensualidadesList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }

    findDataUser(user: String){
        return this.http.get("https://servicios.espe.edu.ec:8443/adm_user-0.0.1-SNAPSHOT/adm/id/" + user + "/13",httpconf).pipe(
          map(
            (res: any) => {
                return res;
            },
            error => {
              console.log("Error: ", error);
            }
          )
        );
      }
}
