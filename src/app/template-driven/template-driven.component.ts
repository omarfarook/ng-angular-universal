import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {


  @ViewChild('regForm') regForm: NgForm;
  gender = ['Male', 'Female'];
  formDetails = {
    firstName: '',
    lastName: '',
    SecretQuestion: '',
    answer: '',
    gender: ''
  };
  formSubmitted = false;

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.regForm);
    this.formSubmitted = true;

    this.formDetails.firstName = this.regForm.value.firstName;
    this.formDetails.lastName = this.regForm.value.lastName;
    this.formDetails.SecretQuestion = this.regForm.value.secret;
    this.formDetails.answer = this.regForm.value.answer;
    this.formDetails.gender = this.regForm.value.gender;
  }

  resetForm() {
    this.regForm.resetForm();
  }

}
