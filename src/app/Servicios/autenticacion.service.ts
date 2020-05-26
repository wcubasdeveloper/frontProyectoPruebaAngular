import { environment } from  './../../environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from '../Modelos/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { map, catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { IJwtInterface } from '../Modelos/jwt-response';
import { Desinfeccion } from '../Modelos/Desinfeccion';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private token: string;
  
  private httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/xml',
      'Authorization': 'Bearer ' + this.token
    })
  };

  constructor(private http: HttpClient) { }

  login(data): Observable<IJwtInterface>{

    return this.http.post<IJwtInterface>( environment.baseUrl + 'api/usuario/login', data).pipe(tap(
      (res: IJwtInterface) =>{
        //console.log('response->',res);
        if(res.acceso){
          this.guardarToken(res.token, res.expiration);
          // console.log("ENTRO>>");
          // this.desinfeccion();
          // console.log("PASO>>>");
        }else{
          console.log("NO INGRESO");
        }
      }
    ));
  }

  desinfeccion(): Observable<Desinfeccion[]> {
    return this.http.post<Desinfeccion[]>(environment.baseUrl + 'api/desinfecciones/lista', this.httpOptions.headers).pipe(
      tap(
      (res: Desinfeccion[]) =>{
        console.log('response->',res);
      })
    );
  }

  // desinfeccion(): Observable<Desinfeccion[]>{
    
  //   var headersAPI = new Headers();
  //   if(this.token){
  //     headersAPI.append('Authorization','Bearer ' + this.token);
  //   }
  //   return this.http.get(environment.baseUrl + 'api/usuario/login',{
  //     headers : headersAPI,
  //   }).map(res => res.json());
  // }
  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private guardarToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
