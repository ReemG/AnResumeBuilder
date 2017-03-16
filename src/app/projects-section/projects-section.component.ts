import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Projects } from '../Model';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  forms: FormGroup[] = [];
  projects: Projects[];
  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.projects = this.taskService.projects;
  }

  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.projects && this.projects.length) {
      for (let i = 0; i < this.projects.length; i++) {
        var form = this.fb.group({
          projectname: this.projects[i].projectname,
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.projects[i].roles.length; j++) {
          arrayControl.push(this.fb.group({
            role: this.projects[i].roles[j].role,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.addNewProject(); }
  }

  addrole(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      role: '',
    }));
  }

  addNewProject = function () {
    var form = this.fb.group({
      projectname: '',
      formArray: this.fb.array([])
    });

    this.addrole(form);
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
          this.projects.splice(ind, 1);
        }
      }
    }
  }

  deleterole(form, i) {
    const ind = this.forms.indexOf(form);
    var field = <FormArray>this.forms[ind].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
      field.controls.splice(i, 1);
      this.projects[ind].roles.splice(i, 1);
    }
  }
  
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addProj(this.forms[i].value, i);
      }
    }
  }
}
