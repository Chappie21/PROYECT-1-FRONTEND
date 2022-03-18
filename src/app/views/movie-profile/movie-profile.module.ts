import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieProfilePageRoutingModule } from './movie-profile-routing.module';

import { MovieProfilePage } from './movie-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieProfilePageRoutingModule
  ],
  declarations: [MovieProfilePage]
})
export class MovieProfilePageModule {}
