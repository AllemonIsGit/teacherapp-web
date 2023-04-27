import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup
  serverResponse: string


  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private dialog: MatDialog
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
        this.serverResponse = response.message
        setTimeout(() => {
          this.dialog.closeAll()
        }, 1000)
      },
      (error: HttpErrorResponse) => {
        this.serverResponse = error.error
      }
      
    )
  }



}
