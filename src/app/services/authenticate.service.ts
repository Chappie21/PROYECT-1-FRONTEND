import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Constants } from '../config/constants';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http:HttpClient) { }

  private setHeaders(){
    let header = {
      headers: new HttpHeaders()
      .append('Access-Control-Allow-Origin', Constants.basePath)
      .append('Access-Control-Allow-Credentials', 'true')
    }
    return header;
  }

  public postLogin(userOrEmail:string, password:string):any{

    const body = {
        email: userOrEmail,
        clave: password
    }

    return this.http.post(Constants.basePath + 'usuario/autenticar', body, this.setHeaders())
  }
}
