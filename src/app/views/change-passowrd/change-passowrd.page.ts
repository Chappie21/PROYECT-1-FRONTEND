import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-change-passowrd',
  templateUrl: './change-passowrd.page.html',
  styleUrls: ['./change-passowrd.page.scss'],
})
export class ChangePassowrdPage implements OnInit {


  public passwordForm:FormGroup;

  constructor(
    private controller:ControllerService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm():void{
    this.passwordForm = new FormGroup({
      oldPassword: new FormControl('',[Validators.required]),
      newPassword: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(16)])
    })
  }

  private getDataForm(){
    return {
      oldPassword: this.passwordForm.get('oldPassword').value,
      newPassword: this.passwordForm.get('newPassword').value,
      confirmPassword: this.passwordForm.get('confirmPassword').value
    }
  }

  public passwordsMatchValidator(): boolean{

    const {newPassword, confirmPassword} = this.getDataForm();

    return newPassword === confirmPassword;
  }

  public passwordMin6Characteres(){
    const {newPassword} = this.getDataForm();
    return newPassword.length === 6;
  }

  public displayErrors(FormName:string): boolean{
    return this.passwordForm.controls[FormName].invalid && (this.passwordForm.controls[FormName].dirty || this.passwordForm.controls[FormName].touched);
  }

  public closePageModal():void{
    this.controller.dismissModal({
      'dismissed': true
    })
  }

  public disbaledButton():boolean{
    return !this.passwordForm.valid || !this.passwordsMatchValidator()
  }

  public async handleChangePassword(){
      const loading = await this.controller.createLoading();
      loading.present();

      const {oldPassword, newPassword} = this.getDataForm();

      this.userService.changePasasword(oldPassword, newPassword)
      .subscribe(
        async (response)=>{
            loading.dismiss();
            const alert = await this.controller.createAlert({
              header: '',
              message: 'La contrasña a sido cambiada',
              buttons: ['OK']
            });
            alert.present();
            this.closePageModal();
        },
        async (response) =>{
            loading.dismiss();
            this.passwordForm.reset(); // Limpiar campos
            const alert = await this.controller.createAlert({
              header: '',
              message: response.error.mensaje || 'Error en la peticion',
              buttons: ['OK']
            });
            alert.present();
        }
      )
  }

}
