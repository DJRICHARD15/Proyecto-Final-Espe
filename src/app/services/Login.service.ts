
import { Login } from './../model/Login';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};

const URL = 'http://localhost:8080/';
const API_URL = URL + 'getLogin';
const API_URL_CREATE = URL + 'saveOrUpdateLogin';
const API_URL_DELETE = URL + 'deleteLogin';

@Injectable()

export class LoginService {
    apiUrl: string;
    constructor(private http: HttpClient) { }

    buscarLogin(): Observable<Login[]>{
        return this.http.get<Login[]>(API_URL);
    }

    crearOActualizarLogin(login: Login): Observable<Login[]>{
        return this.http.post<Login[]>(API_URL_CREATE, login);
    }

    deleteLogin(login: Login): Observable<Login[]>{
        return this.http.post<Login[]>(API_URL_DELETE, login);
    }

    getLogin(id_login: number): Observable<Login[]>{
        return this.http.get<Login[]>(API_URL);
    }

}
