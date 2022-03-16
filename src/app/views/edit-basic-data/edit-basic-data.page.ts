import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/services/controllers/controller.service';

@Component({
  selector: 'app-edit-basic-data',
  templateUrl: './edit-basic-data.page.html',
  styleUrls: ['./edit-basic-data.page.scss'],
})
export class EditBasicDataPage implements OnInit {

  constructor(private controller:ControllerService) { }

  ngOnInit() {
  }

  public closePageModal():void{
    this.controller.dismissModal({
      'dismissed': true
    })
  }
}
