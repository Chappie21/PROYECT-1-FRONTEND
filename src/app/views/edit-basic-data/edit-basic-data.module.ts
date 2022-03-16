import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBasicDataPageRoutingModule } from './edit-basic-data-routing.module';

import { EditBasicDataPage } from './edit-basic-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBasicDataPageRoutingModule
  ],
  declarations: [EditBasicDataPage]
})
export class EditBasicDataPageModule {}
