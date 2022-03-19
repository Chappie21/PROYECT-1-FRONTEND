import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Constants } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private token: string;

  constructor(private http:HttpClient) { 
      this.checkSessionToken();
  }

  // Verificar existencia de token
  private checkSessionToken(){
    this.token = localStorage.getItem('TOKEN')
    if (this.token && !this.tokenExpired(this.token)) {
      this.isAuthenticated.next(true)
    } else {
      this.isAuthenticated.next(false)
    }
  }

  // Establecer cabeceras
  private setHeaders(){
    let header = {
      headers: new HttpHeaders()
      .append('Access-Control-Allow-Origin', Constants.basePath)
      .append('Access-Control-Allow-Credentials', 'true')
    }
    return header;
  }

  // Relaizar peticion de login
  public postLogin(userOrEmail:string, password:string):any{

    const body = {
        email: userOrEmail,
        clave: password
    }
    return this.http.post(Constants.basePath + 'usuario/autenticar', body, this.setHeaders())
  }

  public deleteSession(){
    localStorage.clear();
    this.token = null;
    this.isAuthenticated.next(false);
  }

  // Establecer token de sesion
  public setToken(token: string){
    localStorage.setItem('TOKEN', token);
    this.token = token;
    this.isAuthenticated.next(true)
  }


  // Verificar expiracion del token
  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}
