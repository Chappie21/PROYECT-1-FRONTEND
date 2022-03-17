import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeProfilePhotoPage } from './change-profile-photo.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeProfilePhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeProfilePhotoPageRoutingModule {}
