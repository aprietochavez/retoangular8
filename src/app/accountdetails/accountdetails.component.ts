import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  pUserName = "^[a-z0-9_-]{5,25}$";
  pPassword = "^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{5,}$";
  formAccountDetails: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formAccountDetails = this.formBuilder.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern(this.pUserName)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.pPassword)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.pPassword)
      ]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.formAccountDetails.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formAccountDetails.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formAccountDetails.value))
  }

}