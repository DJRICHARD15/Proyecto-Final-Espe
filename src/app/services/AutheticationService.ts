import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Login} from './../model/Login'


const http = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  };
  //const API_URL = 'http://localhost:8080/gestionPagos/iniciarsesion/';

@Injectable()
export class AutheticationService {
    constructor(private http: HttpClient) { }

  

    login(credentianl){
        let pass = JSON.stringify(credentianl);
        return this.http.post("/inicio", pass, http).pipe(
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
   
    removeToken() {
        localStorage.removeItem("token");
      }
      // setToken
      accessToken(token: string) {
        localStorage.setItem("token", token);
      }
      // getToken
      passToken() {
        return localStorage.getItem("token");
      }
    
      getUserToken() {
        var token = this.passToken();
        if (token) {
          var userToken = atob(token.split(".")[1]);
          return JSON.parse(userToken);
        } else {
          return null;
        }
      }
    
      setloggedIn() {
        var userLogged = this.getUserToken();
        if (userLogged) {
          return (
            userLogged.exp > Date.now() / 1000 &&
            userLogged.jti == "siglogin"
          );
        } else return false;
      }
}
