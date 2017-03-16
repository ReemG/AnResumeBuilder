import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Work } from '../Model';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {

  forms: FormGroup[] = [];
  works: Work[];
  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.works = this.taskService.works;
  }

  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.works && this.works.length) {
      for (let i = 0; i < this.works.length; i++) {
        var form = this.fb.group({
          starttime: this.works[i].starttime,
          endtime: this.works[i].endtime,
          location: this.works[i].location,
          jobname: this.works[i].jobname,
          companyname: this.works[i].companyname,
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.works[i].tasks.length; j++) {
          arrayControl.push(this.fb.group({
            task: this.works[i].tasks[j].task,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.addNewWork(); }
  }

  addTask(form, tasks): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      task: '',
    }));
  }

  addNewWork = function () {
    var form = this.fb.group({
      starttime: '',
      endtime: '',
      location: '',
      jobname: '',
      companyname: '',
      formArray: this.fb.array([])
    });

    this.addTask(form);
    this.forms.push(form);
  }
  
  delete(form) {
    if (this.forms.length === 1)
    {alert("Can't Delete"); }
    else {
      for (let i = 0; i < this.forms.length; i++) {
        const ind = this.forms.indexOf(form);
        if (this.forms[i] === form) {
          this.forms.splice(ind, 1);
          this.works.splice(ind, 1);
        }
      }
    }
  }
  
  deletetask(form,i) {
    const ind = this.forms.indexOf(form);
    var field = <FormArray>this.forms[ind].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
        field.controls.splice(i, 1);
        this.works[ind].tasks.splice(i, 1);
    }
  }

  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addWork(this.forms[i].value, i);
      }
    }
  }

}
