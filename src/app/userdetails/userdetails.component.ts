import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input() objeto;
  @Output() enviar = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }

  ejecutarEvento() {
    this.enviar.emit(this.txtFullname.value);
  }

  formUserDetails = this._fb.group({
    txtFullname: ['', [
      Validators.required
    ]],
    txtBirthay: ['', [
      Validators.required
    ]],
    cboGender: ['', [
      Validators.required
    ]]
  });

  get txtFullname() {
    return this.formUserDetails.get('txtFullname');
  }

  get txtBirthay() {
    return this.formUserDetails.get('txtBirthay');
  }

  get cboGender() {
    return this.formUserDetails.get('cboGender');
  }
}