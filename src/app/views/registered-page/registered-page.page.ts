import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UserService } from 'src/app/services/user/user.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-page',
  templateUrl: './registered-page.page.html',
  styleUrls: ['./registered-page.page.scss'],
})
export class RegisteredPagePage implements OnInit {


  protected registeredForm:FormGroup;
  
  constructor(
    private user: UserService,
    private controller: ControllerService,
    private storage: StorageService,
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

  protected displayErrors(FormName:string): boolean{
    return this.registeredForm.controls[FormName].invalid && (this.registeredForm.controls[FormName].dirty || this.registeredForm.controls[FormName].touched);
  }

  protected passwordsMatchValidator(): boolean{
    return this.registeredForm.get('clave').value === this.registeredForm.get('confirmClave').value
  }

  protected async handleRegisterdUser(){
    let login = await this.controller.createLoading()
    const formData = this.getFormData(); // datos del formulario

    await login.present();
    this.user.postRegisteredUser(formData.nombre, formData.apellido, formData.email, formData.clave)
    .subscribe(async (response)=>{
      console.log(response)
      await login.dismiss();
      this.storage.setUserData(response);
      this.user.setUserData(response);
      this.router.navigateByUrl('/tabsPage', {replaceUrl: true});
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
