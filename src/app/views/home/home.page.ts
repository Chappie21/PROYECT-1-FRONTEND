import { Component, OnInit } from '@angular/core';
import { Dashboard, MovieInfo } from 'src/app/interfaces/MovieHome';
import { User } from 'src/app/interfaces/user';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { UserService } from 'src/app/services/user/user.service';
import { MovieProfilePage } from '../movie-profile/movie-profile.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public userData:User;
  public movies:MovieInfo[];
  public bestMovies:MovieInfo[];

  public slidersConfig = {
    spaceBeetwen: 10,
    centeredSlides: false,
    slidesPerView: 1.6
  };

  public randomCommentarys: string[] = [
    '¡un mundo de pelis te espera!',
    '¿que tal una pelicula y un taco?',
    '¿lo mismo de siempre?',
    'No spoilers en esta app',
    'Creo que tengo depreisón'
  ]

  public comentary:string;

  constructor(
    private userService:UserService,
    private moviesService:MoviesService,
    private controllerService:ControllerService
  ) { }

  ngOnInit() {
    this.userData = this.userService.getUserData();
    this.getMoviesDashBoard();
    this.comentary = this.SelectRandomComentary();
  }

  private async getMoviesDashBoard(){

    const loading = await this.controllerService.createLoading(); 
    loading.present();

    const response = this.moviesService.getMoviesDashboard()
    .subscribe(
      (response:Dashboard) =>{
          this.movies = response.datos;
          this.getMoviesBestRating();
          loading.dismiss();
      },
      async (response) =>{
        console.log(response);
        loading.dismiss();
      }
    )
  }

  private getMoviesBestRating(){
    this.bestMovies = this.movies.filter((movie) => parseFloat(movie.calificacion) > -1)
  }

  private SelectRandomComentary():string{
     return this.randomCommentarys[Math.floor(Math.random() * this.randomCommentarys.length)];
  }

  // Obtener Pelicula seleccionada por el usuario
  public async movieTouched(movieEmmitter){
      const modal = await this.controllerService.createModal({
        component: MovieProfilePage,
        componentProps: {
            movieId: movieEmmitter.movieId,
            movieTitle: movieEmmitter.movieTitle 
        }
      });
      modal.present();
  }

}
