import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-basic-data',
  templateUrl: './edit-basic-data.page.html',
  styleUrls: ['./edit-basic-data.page.scss'],
})
export class EditBasicDataPage implements OnInit {

  public editForm:FormGroup;
  public userData:User;

  constructor(
    private controller:ControllerService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.LoadData();
    this.buildForm();
  }

  private buildForm(){
    this.editForm = new FormGroup({
      nombre: new FormControl(this.userData.nombre, [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]+')]),
      apellido: new FormControl(this.userData.apellido, [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z]+')]),
      email: new FormControl(this.userData.email, [Validators.required, Validators.email]),
    })
  }

  private LoadData(){
    this.userData = this.userService.getUserData();
  }

  private getFormData(){
    return {
      nombre: this.editForm.get('nombre').value,
      apellido: this.editForm.get('apellido').value,
      email: this.editForm.get('email').value
    }
  }

  public displayErrors(FormName:string): boolean{
    return this.editForm.controls[FormName].invalid && (this.editForm.controls[FormName].dirty || this.editForm.controls[FormName].touched);
  }

  public closePageModal():void{
    this.controller.dismissModal({
      'dismissed': true
    })
  }

  public async handleEditData(){
    const {nombre, apellido, email} = this.getFormData();

    const loading = await this.controller.createLoading();
    loading.present();

    this.userService.updateUserData(nombre, apellido, email)
    .subscribe(
      async (response) =>{
        this.userService.setUserBasicData(nombre, apellido, email);
        loading.dismiss();
        const alert = await this.controller.createAlert({
          header: '',
          message: 'Datos actualizados',
          buttons: ['OK']
        });

        alert.present();
        this.closePageModal();
      },
      async (response) =>{
        const alert = await this.controller.createAlert({
          header: 'Error al actualizar datos',
          message: response.error.mensaje,
          buttons: ['OK'],
        });
        loading.dismiss();
        alert.present();
      }
    )
  }

}
