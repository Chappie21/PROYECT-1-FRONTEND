import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/services/controllers/controller.service';

@Component({
  selector: 'app-change-profile-photo',
  templateUrl: './change-profile-photo.page.html',
  styleUrls: ['./change-profile-photo.page.scss'],
})
export class ChangeProfilePhotoPage implements OnInit {

  constructor(private controller:ControllerService) { }

  ngOnInit() {
  }

  public closePageModal():void{
    this.controller.dismissModal({
      'dismissed': true
    })
  }

}
