import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBasicDataPage } from './edit-basic-data.page';

const routes: Routes = [
  {
    path: '',
    component: EditBasicDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBasicDataPageRoutingModule {}
