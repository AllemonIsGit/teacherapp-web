import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-element',
  templateUrl: './student-element.component.html',
  styleUrls: ['./student-element.component.css']
})
export class StudentElementComponent {
  @Input() student: Student
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(
    private studentService: StudentService
  ) { }


  xd() {
    this.student.name
  }

  onDeleteClick() {
    this.studentService.deleteStudent(this.student.id).subscribe(
      (response: any) => {
        console.log('git')
        this.deleteEvent.emit()
      }
    ),
      (error: HttpErrorResponse) => {
        console.log('nie git')
      }
  }
}
