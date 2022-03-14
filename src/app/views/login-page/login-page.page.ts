import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ControllerService } from 'src/app/services/controller.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {


  protected form:FormGroup

  constructor(
    private autenticate:AuthenticateService,
    public controllerService:ControllerService
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
  protected async handleLogin () {
      let loading = await this.controllerService.createLoading();

      await loading.present(); // Activar componente con animacion de carga

      this.autenticate.postLogin(this.form.get('emailOrUser').value, this.form.get('password').value)
      .subscribe(async (response) =>{
          console.log(response);
          await loading.dismiss()
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
