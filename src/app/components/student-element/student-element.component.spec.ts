import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentElementComponent } from './student-element.component';

describe('StudentElementComponent', () => {
  let component: StudentElementComponent;
  let fixture: ComponentFixture<StudentElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
