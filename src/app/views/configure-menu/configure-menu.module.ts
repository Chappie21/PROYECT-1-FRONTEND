import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUserPageRoutingModule } from './configure-menu-routing.module';

import { ConfigureMenuPage } from './configure-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUserPageRoutingModule
  ],
  declarations: [ConfigureMenuPage]
})
export class EditUserPageModule {}
