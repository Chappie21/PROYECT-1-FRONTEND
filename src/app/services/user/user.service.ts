import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Constants } from '../../config/constants';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataUser:User;

  constructor(private http:HttpClient) { 
    this.getLocalUserData();
  }

  private getLocalUserData(){
      this.dataUser = JSON.parse(localStorage.getItem('USER'));
      console.log(this.dataUser)
  }

  private setHeaders(){
    let header = {
      headers: new HttpHeaders()
      .append('Access-Control-Allow-Origin', Constants.basePath)
      .append('Access-Control-Allow-Credentials', 'true')
    }
    return header;
  }

  private setHeaderWithSecurity(){
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
      return this.dataUser;
  }

  public setUserData(data:User){
    this.dataUser = data;
  }

  public setUserBasicData(nombre:string, apellido:string, email:string){
    this.dataUser.nombre = nombre;
    this.dataUser.apellido = apellido;
    this.dataUser.email = email;
  }
}
