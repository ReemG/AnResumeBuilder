import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {
forms: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
  }

  ngOnInit() {
    this.course();
  }
  addcourse(form):void{
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      course: '',
    }));
  }
  course() :void{
    var form = this.fb.group({
      formArray: this.fb.array([])
    });
    this.addcourse(form);
    this.forms.push(form);
  }
  getData(): void{
     for(const form of this.forms){
       if(form.value!== ""){
       this.taskSevice.addCourse(form.value);
       }
     }
   }
}
