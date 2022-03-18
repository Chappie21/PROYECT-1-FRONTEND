import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setUserData(userData){
      localStorage.setItem('USER', JSON.stringify(userData));
      localStorage.setItem('TOKEN', userData.access_token)
  }

}
