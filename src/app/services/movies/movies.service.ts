import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private http:HttpClient) { }

  private setHeaderWithSecurity(){
    let header = {
      headers: new HttpHeaders()
      .append('Access-Control-Allow-Origin', Constants.basePath)
      .append('Access-Control-Allow-Credentials', 'true')
      .append('Authorization', `Bearer ${localStorage.getItem('TOKEN')}`)
    }
    return header;
  }

  public getMoviesDashboard(){
    return this.http.get(Constants.basePath + 'inicio', this.setHeaderWithSecurity());
  }

}
