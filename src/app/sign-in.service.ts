/*
============================================
; Title: Exercise 7.3 Form Validation
; Author: Professor Krasso
; Date: February 19, 2022
; Modified By: William Talley
; Description: GPA Calculator App pt 3 sign-in.service file
;for validating a valid student id is passed
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
