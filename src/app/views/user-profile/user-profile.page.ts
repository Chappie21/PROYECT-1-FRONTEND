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

    let loading = await this.controller.createLoading();

    await loading.present(); // Activar componente con animacion de carga


    const response = this.userService.getUserData().subscribe(
      (response:User) =>{

          // Establecer datos obtenidos del usuario
          this.userData = response;
          console.log(response);
      },
      async (response) =>{

          // Mostrar alert en caso de error
          const alert = await this.controller.createAlert({
            header: '',
            message: response.mensaje,
            buttons: ['OK']
          })

          alert.present();
      }
    );

    loading.dismiss();
  }

  public async handleNavigateToSettings() {
    const modal = await this.controller.createModal({component: ConfigureMenuPage});
    modal.present();
  }

}
