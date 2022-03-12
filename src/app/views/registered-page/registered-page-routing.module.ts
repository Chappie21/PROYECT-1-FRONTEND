import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteredPagePage } from './registered-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteredPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteredPagePageRoutingModule {}
