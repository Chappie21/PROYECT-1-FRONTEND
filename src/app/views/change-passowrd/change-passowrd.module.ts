import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePassowrdPageRoutingModule } from './change-passowrd-routing.module';

import { ChangePassowrdPage } from './change-passowrd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePassowrdPageRoutingModule
  ],
  declarations: [ChangePassowrdPage]
})
export class ChangePassowrdPageModule {}
