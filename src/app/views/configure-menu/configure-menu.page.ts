import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/services/controllers/controller.service';

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

  public closePageModal(){
    this.controller.dismissModal({
      'dismissed': true
    })
  }

}
