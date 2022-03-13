import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteredPagePageRoutingModule } from './registered-page-routing.module';

import { RegisteredPagePage } from './registered-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteredPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisteredPagePage]
})
export class RegisteredPagePageModule {}
