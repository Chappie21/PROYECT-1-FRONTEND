import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieProfilePage } from './movie-profile.page';

const routes: Routes = [
  {
    path: '',
    component: MovieProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieProfilePageRoutingModule {}
