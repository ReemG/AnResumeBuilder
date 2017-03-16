import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Education } from '../Model';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  forms: FormGroup[] = [];
  educations: Education[];

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.educations = this.taskService.educations;
  }

  ngOnInit() {
    this.found();
  }
  
  found(): void {
    if (this.educations && this.educations.length) {
      for (let i = 0; i < this.educations.length; i++) {
        var form = this.fb.group({
          starttime: this.educations[i].starttime,
          endtime: this.educations[i].endtime,
          educationName: this.educations[i].educationName,
          unviName: this.educations[i].unviName,
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.educations[i].educourses.length; j++) {
          arrayControl.push(this.fb.group({
            coursename: this.educations[i].educourses[j].coursename,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.addNewEducation(); }
  }

  addcourses(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      coursename: '',
    }));
  }

  addNewEducation = function () {
    var form = this.fb.group({
      starttime: '',
      endtime: '',
      educationName: '',
      unviName: '',
      formArray: this.fb.array([])
    });

    this.addcourses(form);
    this.forms.push(form);
  }

  delete(form) {
    if (this.forms.length === 1)
    { alert("Can't Delete"); }
    else {
      for (let i = 0; i < this.forms.length; i++) {
        const ind = this.forms.indexOf(form);
        if (this.forms[i] === form) {
          this.forms.splice(ind, 1);
          this.educations.splice(ind, 1);
        }
      }
    }
  }

  deletecourse(form, i) {
    const ind = this.forms.indexOf(form);
    var field = <FormArray>this.forms[ind].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
      field.controls.splice(i, 1);
      this.educations[ind].educourses.splice(i, 1);
    }
  }

  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addEdu(this.forms[i].value, i);
      }
    }
  }
}
