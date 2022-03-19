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
import { DeleteAccountPage } from './views/delete-account/delete-account.page';
import { HomePageModule } from './views/home/home.module';
import { DeleteAccountPageModule } from './views/delete-account/delete-account.module';
import { ConfigureMenuPageModule } from './views/configure-menu/configure-menu.module';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

@NgModule({
  declarations: [
    AppComponent, 
    EditBasicDataPage, 
    ChangePassowrdPage,
    ChangeProfilePhotoPage,
    ProfilePhotoComponent,
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
    HomePageModule,
    UserProfilePageModule,
    DeleteAccountPageModule,
    ConfigureMenuPageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClientModule, YoutubeVideoPlayer],
  bootstrap: [AppComponent],
})
export class AppModule {}
