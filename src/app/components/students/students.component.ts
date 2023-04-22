import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private studentService: StudentService
  ) {

  }

  onNewStudent() {
    this.dialog.open(StudentFormComponent)
    this.studentService.getStudents().subscribe((data) => {console.log(JSON.stringify(data))})

  }

}
