import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Reto Angular 8';

  constructor(private _fb: FormBuilder) { }

  miFormulario = this._fb.group({
    txtFullname: ['', [
      Validators.required
    ]],
    txtUsername: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25)
    ]],
    txtBirthay: ['', [
      Validators.required
    ]],
    txtEmail: ['', [
      Validators.required,
      Validators.email
    ]],
    cboGender: ['', [
      Validators.required
    ]],
    txtPassword: ['', [
      Validators.required,
      Validators.minLength(5)
    ]],
  });

  get txtFullname() {
    return this.miFormulario.get('txtFullname');
  }

  get txtUsername() {
    return this.miFormulario.get('txtUsername');
  }

  get txtBirthay() {
    return this.miFormulario.get('txtBirthay');
  }

  get txtEmail() {
    return this.miFormulario.get('txtEmail');
  }

  get cboGender() {
    return this.miFormulario.get('cboGender');
  }

  get txtPassword() {
    return this.miFormulario.get('txtPassword');
  }

}
