import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePhotoComponent } from './profile-photo.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ProfilePhotoComponent],
  exports: [ProfilePhotoComponent]
})
export class ProfilePhotoComponentModule {}