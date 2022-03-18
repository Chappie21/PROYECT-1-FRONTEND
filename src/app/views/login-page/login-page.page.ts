import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  public form:FormGroup

  constructor(
    private autenticate:AuthenticateService,
    private userService:UserService,
    private controllerService:ControllerService,
    private storage: StorageService,
    private router:Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
        emailOrUser: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })
  }

  // Proceso de logIn del usuario
  public async handleLogin () {
      let loading = await this.controllerService.createLoading();

      await loading.present(); // Activar componente con animacion de carga

      this.autenticate.postLogin(this.form.get('emailOrUser').value, this.form.get('password').value)
      .subscribe(async (response) =>{
          console.log(response);
          await loading.dismiss();
          this.storage.setUserData(response);
          this.autenticate.setToken(response.access_token);
          this.userService.setUserData(response);
          this.router.navigateByUrl('/tabsPage/home', {replaceUrl: true});
      },
      async (response) => {
        await loading.dismiss()
        console.log(response.error);
        const alert = await this.controllerService.createAlert({
          header: 'Inicio de sesion fallido',
          message: response.error.mensaje,
          buttons: ['OK'],
        });
        alert.present()
      })     
  }

}
