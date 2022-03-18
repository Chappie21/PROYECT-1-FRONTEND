import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePassowrdPage } from './change-passowrd.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePassowrdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePassowrdPageRoutingModule {}
