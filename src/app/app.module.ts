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
import { ChangeProfilePhotoPage } from './views/change-profile-photo/change-profile-photo.page';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { UserProfilePageModule } from './views/user-profile/user-profile.module';
import { UserProfilePage } from './views/user-profile/user-profile.page';

@NgModule({
  declarations: [
    AppComponent, 
    ConfigureMenuPage, 
    EditBasicDataPage, 
    ChangePassowrdPage,
    ChangeProfilePhotoPage,
    ProfilePhotoComponent,
    UserProfilePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    IonicModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
