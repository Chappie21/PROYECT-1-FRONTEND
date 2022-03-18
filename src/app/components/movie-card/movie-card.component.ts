import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {


  @Input('cover') cover:string = "https://res.cloudinary.com/binwus/image/upload/v1647224581/cld-sample.jpg";
  @Input('title') title:string = "titulo de la pelicula";
  @Input('rating') rating:string = "0"

  constructor() { }

  ngOnInit() {}

}
