import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigureMenuPageRoutingModule } from './configure-menu-routing.module';

import { ConfigureMenuPage } from './configure-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigureMenuPageRoutingModule
  ],
  declarations: [ConfigureMenuPage]
})
export class ConfigureMenuPageModule {}
