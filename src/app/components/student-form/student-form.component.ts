import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup


  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      payPerSession: ['', []]
    })
  }

}
