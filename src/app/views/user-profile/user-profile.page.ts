import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UserService } from 'src/app/services/user/user.service';
import { ConfigureMenuPage } from '../configure-menu/configure-menu.page';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {


  public userData:User = <User>{
    nombre: '',
    apellido: '',
    fotoPerfil: '',
    visibleEmail: false,
    visibleTop: false
  };

  constructor(
    private router:Router,
    private controller:ControllerService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  private async getUserData(){
    this.userData = this.userService.getUserData();
    console.log(this.userData);
  }

  public async handleNavigateToSettings() {
    const modal = await this.controller.createModal({component: ConfigureMenuPage});
    modal.present();
  }

}
