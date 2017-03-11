import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  forms: FormGroup[] = [];
  
  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
  }

  ngOnInit() {
    this.addNewEducation();
  }
  addcourses (form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      coursename: '',
      
    }));
  }
  addNewEducation = function () {
   var form = this.fb.group({
      starttime:'',
      endtime:'',
      educationName:'',
      unviName:'',
      formArray: this.fb.array([])
    });
 
    this.addcourses(form);
    this.forms.push(form);
  }
  getData(): void{
     for(const form of this.forms){
       if(form.value!== ""){
       this.taskSevice.addEdu(form.value);
       }
     }
   }
}
