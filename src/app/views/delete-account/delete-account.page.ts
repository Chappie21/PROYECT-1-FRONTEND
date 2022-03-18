import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  constructor(
    private controller:ControllerService,
    private userService:UserService,
    private authService:AuthenticateService,
    private route:Router
  ) { }

  ngOnInit() {
  }

  public closePageModal():void{
    this.controller.dismissModal({
      'dismissed': true
    })
  }

  public async handleDeleteAccount(){
    const loading = await this.controller.createLoading();
    loading.present();
    this.userService.deleteAccount()
    .subscribe(
      async (response) =>{
        loading.dismiss();
        const alert = await this.controller.createAlert({
          header: 'Cuneta eliminda',
          message: 'Se cerrara su sesion',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.authService.deleteSession();
                this.route.navigateByUrl('loginPage', {replaceUrl: true})
                this.closePageModal();
              }
            }
          ],
        });
        alert.present();
      },
      async (response) =>{
          loading.dismiss();
          const alert = await this.controller.createAlert({
              header: '',
              message: response.error.mensaje || 'Error en la peticion',
              buttons: ['OK']
          });
          alert.present();
      }
    )
  }

}
