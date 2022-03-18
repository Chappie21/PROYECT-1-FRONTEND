import { Component, OnInit, ViewChild } from '@angular/core';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { ChangePassowrdPage } from '../change-passowrd/change-passowrd.page';
import { ChangeProfilePhotoPage } from '../change-profile-photo/change-profile-photo.page';
import { DeleteAccountPage } from '../delete-account/delete-account.page';
import { EditBasicDataPage } from '../edit-basic-data/edit-basic-data.page';

@Component({
  selector: 'app-configure-menu',
  templateUrl: './configure-menu.page.html',
  styleUrls: ['./configure-menu.page.scss'],
})
export class ConfigureMenuPage implements OnInit {

  constructor(
    private controller:ControllerService
  ) { }

  ngOnInit() {
  }

  public closePageModal():void{
    this.controller.dismissModal({
      'dismissed': true
    })
  }

  public async openEditBasicData(){
    const modal = await this.controller.createModal({component: EditBasicDataPage});
    modal.present();
  }

  public async openChangePassword(){
    const modal = await this.controller.createModal({component: ChangePassowrdPage});
    modal.present();
  }

  public async openChangeProfilePhoto(){
    const modal = await this.controller.createModal({component: ChangeProfilePhotoPage});
    modal.present();
  }

  public async openDeleteAccount(){
    const modal = await this.controller.createModal(
      {
        component: DeleteAccountPage,
      }
    );
    modal.present();

    // En caso de eliminar la cuenta cierra tambien el modal principal
    modal.onDidDismiss().then(() =>{
        const user = localStorage.getItem('USER');
        if(!user){
          this.closePageModal();
        }
    })
  }
}
