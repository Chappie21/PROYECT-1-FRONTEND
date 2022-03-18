import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
})
export class ProfilePhotoComponent implements OnInit {

  @Input('profileImage') profileImage:string = null;

  constructor() { console.log(this.profileImage)}

  ngOnInit() {}

}
