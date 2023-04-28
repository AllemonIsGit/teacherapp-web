import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = new Array

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private studentService: StudentService
  ) {

  }
  ngOnInit(): void {
    this.getStudents()
  }

  onNewStudent() {
    var studentDialog = this.dialog.open(StudentFormComponent)
    studentDialog.afterClosed().subscribe(
      result => {
        this.getStudents()
        console.log('xd')
      }
    )
  }

  getStudents() {
    this.studentService.getStudents().subscribe((e) => this.students = e)
  }

  onChildDeleteEvent() {
    this.getStudents()
  }
}
