import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
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

  onCreate() {
    this.studentService.postStudent(this.studentForm.value).subscribe(
      (response: any) => {
        alert(response.message)
      },
      (error: HttpErrorResponse) => {
        alert('error')
      }
      
    )
  }



}
