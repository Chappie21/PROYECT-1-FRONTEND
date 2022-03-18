import { Component, OnInit } from '@angular/core';
import { Dashboard, MovieInfo } from 'src/app/interfaces/MovieHome';
import { User } from 'src/app/interfaces/user';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public userData:User;
  public movies:MovieInfo[];

  constructor(
    private userService:UserService,
    private moviesService:MoviesService,
    private controllerService:ControllerService
  ) { }

  ngOnInit() {
    this.userData = this.userService.getUserData();
    this.getMoviesDashBoard();
  }

  private async getMoviesDashBoard(){

    const loading = await this.controllerService.createLoading(); 
    loading.present();

    const response = this.moviesService.getMoviesDashboard()
    .subscribe(
      (response:Dashboard) =>{
          this.movies = response.datos;
          loading.dismiss();
      },
      async (response) =>{
        console.log(response);
        loading.dismiss();
      }
    )
  }

}
