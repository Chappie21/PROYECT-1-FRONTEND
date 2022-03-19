import { Component, Input, OnInit } from '@angular/core';
import { MovieProfile } from 'src/app/interfaces/MovieProfile';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.page.html',
  styleUrls: ['./movie-profile.page.scss'],
})
export class MovieProfilePage implements OnInit {

  @Input('movieId') movieId:string;
  @Input('movieTitle') movieTitle:string;

  public movieData:MovieProfile = {
    calificacion:       '',
    descripcion:        '',
    director:           '',
    duracion:           '',
    fechaEstreno:       '',
    genero:             '',
    idioma:             '',
    imagenes:           [],
    nombre:             '',
    portada:            '',
    trailers:           []
  };

  public slidersConfig = {
    spaceBeetwen: 20,
    centeredSlides: true,
    slidesPerView: 1
  };

  constructor(
    private controller:ControllerService,
    private movieService:MoviesService,
    private youtubeService:YoutubeVideoPlayer
  ) { }

  ngOnInit() {
    this.getMovieData();
  }

  private async getMovieData(){

      const loading = await this.controller.createLoading();
      loading.present();

      this.movieService.getMovieById(this.movieId)
      .subscribe(
        (response:MovieProfile) =>{
          this.movieData = response;
          console.log(this.movieData)
          loading.dismiss();
        },
        async (response) =>{
          loading.dismiss();
          const alert = await this.controller.createAlert({
            header: 'Error al obtener datos',
            message: response.error.mensaje || 'Error en la peticion',
            buttons: ['OK'],
          });
          alert.present()
        }
      )
  }

  public closePageModal():void{
    this.controller.dismissModal({
      'dismissed': true
    })
  }

  public getDate(date:string):string{
    const dateMovie = new Date(date);
    return `${dateMovie.getDay()}-${dateMovie.getMonth()}-${dateMovie.getFullYear()}`;
  }

  public getYoutubeTrailerImage(url:string){
      return url.replace('www', 'img').replace('watch?v=', 'vi/').concat('/0.jpg');
  }

  // Abrir APP de youtube para visualziar trailer
  public goToYoutubeVideo(url:string){
    this.youtubeService.openVideo(url);
  }

}
