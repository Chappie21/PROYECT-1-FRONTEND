import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteredPagePageRoutingModule } from './registered-page-routing.module';

import { RegisteredPagePage } from './registered-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteredPagePageRoutingModule
  ],
  declarations: [RegisteredPagePage]
})
export class RegisteredPagePageModule {}
