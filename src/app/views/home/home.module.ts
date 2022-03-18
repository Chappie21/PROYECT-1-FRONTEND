import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { MovieCardComponentModule } from 'src/app/components/movie-card/movie-card.component.module';
import { MovieProfilePageModule } from '../movie-profile/movie-profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MovieCardComponentModule,
    MovieProfilePageModule
  ],
  declarations: [HomePage],
  entryComponents: [MovieCardComponent]
})
export class HomePageModule {}
