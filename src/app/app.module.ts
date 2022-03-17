import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfigureMenuPage } from './views/configure-menu/configure-menu.page';
import { EditBasicDataPage } from './views/edit-basic-data/edit-basic-data.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePassowrdPage } from './views/change-passowrd/change-passowrd.page';

@NgModule({
  declarations: [
    AppComponent, 
    ConfigureMenuPage, 
    EditBasicDataPage, 
    ChangePassowrdPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
