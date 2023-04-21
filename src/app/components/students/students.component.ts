import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {

  }

  onNewStudent() {
    this.dialog.open(StudentFormComponent)
  }

}
