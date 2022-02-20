/*
============================================
; Title: Exercise 7.3 Form Validation
; Author: Professor Krasso
; Date: February 19, 2022
; Modified By: William Talley
; Description: GPA Calculator App sign-in component file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
// added Validators to this import statement for ex 7.3
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

//a get() function  named form that returns the signinForm controls
//created as a helper function to return the forms
get form() { return this.signinForm.controls; }

  //adds cookie to browser and validates the studentId that is entered or else error message
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId =  parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage= 'The student ID you entered is invalid. Please try again.'
    }
  }

}
