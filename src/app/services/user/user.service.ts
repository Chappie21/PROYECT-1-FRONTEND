import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Constants } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private setHeaders(){
    let header = {
      headers: new HttpHeaders()
      .append('Access-Control-Allow-Origin', Constants.basePath)
      .append('Access-Control-Allow-Credentials', 'true')
    }
    return header;
  }

  private setHeaderWithSecurity(){
    //console.log(localStorage.getItem('TOKEN'));
    let header = {
      headers: new HttpHeaders()
      .append('Access-Control-Allow-Origin', Constants.basePath)
      .append('Access-Control-Allow-Credentials', 'true')
      .append('Authorization', `Bearer ${localStorage.getItem('TOKEN')}`)
    }
    return header;
  }

  public postRegisteredUser(
    nombre:string, 
    apellido:string,
    email:string,
    clave:string
  ):any{

    const body = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        clave: clave
    }

    return this.http.post(Constants.basePath + 'usuario', body, this.setHeaders())
  }

  public getUserData(){
    return this.http.get(Constants.basePath + 'usuario', this.setHeaderWithSecurity())
  }
}
