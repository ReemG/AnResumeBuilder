import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Courses } from '../Model';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {
  forms: FormGroup[] = [];
  courses: Courses[];
  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.courses = this.taskService.courses;
  }

  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.courses && this.courses.length) {
      for (let i = 0; i < this.courses.length; i++) {
        var form = this.fb.group({
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.courses[i].courses.length; j++) {
          arrayControl.push(this.fb.group({
            course: this.courses[i].courses[j].course,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.Course(); }
  }

  addcourse(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      course: '',
    }));
  }

  Course(): void {
    var form = this.fb.group({
      formArray: this.fb.array([])
    });
    this.addcourse(form);
    this.forms.push(form);
  }

  delete(i) {
    var field = <FormArray>this.forms[0].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
      field.controls.splice(i, 1);
      this.courses[0].courses.splice(i, 1);
    }
  }
  
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addCourse(this.forms[i].value, i);
      }
    }
  }
}
