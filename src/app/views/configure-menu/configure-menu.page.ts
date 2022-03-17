import { Component, OnInit, ViewChild } from '@angular/core';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { ChangePassowrdPage } from '../change-passowrd/change-passowrd.page';
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
}
