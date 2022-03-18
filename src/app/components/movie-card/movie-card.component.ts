import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input('movieId') movieId:string;
  @Input('cover') cover:string = "https://res.cloudinary.com/binwus/image/upload/v1647224581/cld-sample.jpg";
  @Input('title') title:string = "titulo de la pelicula";
  @Input('rating') rating:string = "0"

  @Output() touchCard = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  // Emitir evento de card (pelicula) seleccionada
  public cardTouched():void{
    this.touchCard.emit({
      movieId: this.movieId,
      movieTitle: this.title
    });
  }

}
