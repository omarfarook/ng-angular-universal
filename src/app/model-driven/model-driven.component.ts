import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  regForm: FormGroup;
  gender = ['Male', 'Female'];
  formSubmitted = false;
  formDetails = {
    firstName: '',
    lastName: '',
    SecretQuestion: '',
    answer: '',
    gender: ''
  };

  constructor() { }

  ngOnInit() {

    this.regForm = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender' : new FormControl(null, Validators.required),
      'secretQn' : new FormControl(null, Validators.required),
      'answer' : new FormControl(null, Validators.required),
      'comments': new FormControl(null),
      'confirmChk' : new FormControl(null, Validators.required),

    });

  }

  onSubmit() {
    console.log(this.regForm);
    this.formSubmitted = true;

    this.formDetails.firstName = this.regForm.value.firstName;
    this.formDetails.lastName = this.regForm.value.lastName;
    this.formDetails.SecretQuestion = this.regForm.value.secretQn;
    this.formDetails.answer = this.regForm.value.answer;
    this.formDetails.gender = this.regForm.value.gender;
  }

  resetForm() {
    this.regForm.reset();
  }

}
