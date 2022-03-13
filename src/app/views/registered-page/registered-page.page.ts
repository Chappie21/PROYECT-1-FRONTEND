import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registered-page',
  templateUrl: './registered-page.page.html',
  styleUrls: ['./registered-page.page.scss'],
})
export class RegisteredPagePage implements OnInit {


  protected registeredForm:FormGroup;
  
  constructor() { }

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

  protected displayErrors(FormName:string): boolean{
    return this.registeredForm.controls[FormName].invalid && (this.registeredForm.controls[FormName].dirty || this.registeredForm.controls[FormName].touched);
  }

  protected passwordsMatchValidator(): boolean{
    console.log(this.registeredForm.get('clave').value === this.registeredForm.get('confirmClave').value)
    return this.registeredForm.get('clave').value === this.registeredForm.get('confirmClave').value
  }

}
