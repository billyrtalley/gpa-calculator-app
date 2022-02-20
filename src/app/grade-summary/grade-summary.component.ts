/*
============================================
; Title: Exercise 7.3 Form Validation
; Author: Professor Krasso
; Date: February 19, 2022
; Modified By: William Talley
; Description: GPA Calculator App grade-summary component ts file
;===========================================
*/

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
//two input values: grade of type string and course of type string
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
