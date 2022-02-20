/*
============================================
; Title: Exercise 7.3 Form Validation
; Author: Professor Krasso
; Date: February 19, 2022
; Modified By: William Talley
; Description: GPA Calculator App home component file
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//Variables for transcripts and setting up the arrays
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
  transcriptEntries: Array<ITranscript> = []
//variable for the GPA
  gpaTotal: number = 0;
  //variable for FormGroup; added for 7.3
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {

   }


// use the FormBuilder to build a new FormGroup with two FormControls: course and grade
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }


  get form() { return this.transcriptForm.controls; }

//revised previous saveEntry function to onSubmit with a parameter called event
onSubmit(event: { currentTarget: { reset: () => void } }) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

   event.currentTarget.reset();
  }

 //a for loop and iterate over the transcriptEntries array; use list in blackboard for scale
 calculateResults() {
  let gpa: number = 0;
  for (let entry of this.transcriptEntries) {
    console.log(entry.grade)
    switch(entry.grade) {
      case 'A':
        console.log('its an a')
        gpa += 4.00;
        break;
      case 'A-':
        gpa += 3.70;
        break;
      case 'B+':
        gpa += 3.33;
        break;
      case 'B':
        gpa += 3.00;
        break;
      case 'B-':
        gpa += 2.70;
        break;
      case 'C+':
        gpa += 2.30;
        break;
      case 'C':
        gpa += 2.00;
        break;
      case 'C-':
        gpa += 1.70;
        break;
     case 'D+':
        gpa += 1.30;
        break;
      case 'D':
        gpa += 1.00;
        break;
      case 'D-':
        gpa += 0.70;
        break;
      case 'F':
        gpa += 0.00;
        break;
    }
  }
  console.log(gpa);
  this.gpaTotal = gpa / this.transcriptEntries.length;
  console.log(this.gpaTotal);
}
//function to clear entries
clearEntries() {
  this.transcriptEntries = [];
  this.gpaTotal = 0;
}

}
