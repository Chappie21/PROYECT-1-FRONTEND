import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setUserData(userData){
      localStorage.setItem('USER', userData);
      localStorage.setItem('TOKEN', userData.access_token)
  }

}
