import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { ConfigureMenuPage } from '../configure-menu/configure-menu.page';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(
    private router:Router,
    private controller:ControllerService
  ) { }

  ngOnInit() {
  }

  public async handleNavigateToSettings() {
    const modal = await this.controller.createModal({component: ConfigureMenuPage});
    modal.present();
  }

}
