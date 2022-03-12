import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {


  protected form:FormGroup

  constructor() { 
      
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
        emailOrUser: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })
  }

  protected handleLogin () {
    
  }

}
