import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeProfilePhotoPageRoutingModule } from './change-profile-photo-routing.module';

import { ChangeProfilePhotoPage } from './change-profile-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeProfilePhotoPageRoutingModule
  ],
  declarations: [ChangeProfilePhotoPage]
})
export class ChangeProfilePhotoPageModule {}
