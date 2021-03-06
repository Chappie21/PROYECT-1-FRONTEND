import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UserService } from 'src/app/services/user/user.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';

@Component({
  selector: 'app-registered-page',
  templateUrl: './registered-page.page.html',
  styleUrls: ['./registered-page.page.scss'],
})
export class RegisteredPagePage implements OnInit {


  public registeredForm:FormGroup;
  
  constructor(
    private user: UserService,
    private controller: ControllerService,
    private authService:AuthenticateService,
    private router: Router,
  ) { }

  ngOnInit() {
      this.buildForm()
  }

  private buildForm(){
    this.registeredForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]+')]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      confirmClave: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(16)])
    })
  }

  private getFormData(){
    return {
        nombre: this.registeredForm.get('nombre').value,
        apellido: this.registeredForm.get('apellido').value,
        email: this.registeredForm.get('email').value,
        clave: this.registeredForm.get('clave').value
    }
  }

  public displayErrors(FormName:string): boolean{
    return this.registeredForm.controls[FormName].invalid && (this.registeredForm.controls[FormName].dirty || this.registeredForm.controls[FormName].touched);
  }

  public passwordsMatchValidator(): boolean{
    return this.registeredForm.get('clave').value === this.registeredForm.get('confirmClave').value
  }

  public async handleRegisterdUser(){
    let login = await this.controller.createLoading()
    const formData = this.getFormData(); // datos del formulario

    await login.present();
    this.user.postRegisteredUser(formData.nombre, formData.apellido, formData.email, formData.clave)
    .subscribe(async (response)=>{
      console.log(response)
      await login.dismiss();
      this.user.setUserData(response);
      this.authService.setToken(response.access_token);
      this.router.navigateByUrl('/tabsPage/home', {replaceUrl: true});
    },
    async (response) =>{
      await login.dismiss();
      console.log(response)
      const alert =await this.controller.createAlert({
        header: '',
        message: response.error.mensaje,
        buttons: ['OK']
      });
      await alert.present();
    })
  }

}
