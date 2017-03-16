import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Skillcatagory } from '../Model';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
  forms: FormGroup[] = [];
  skills: Skillcatagory[];
  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.skills = this.taskService.skills;
  }

  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.skills && this.skills.length) {
      for (let i = 0; i < this.skills.length; i++) {
        var form = this.fb.group({
          skillcategory: this.skills[i].skillcategory,
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.skills[i].skills.length; j++) {
          arrayControl.push(this.fb.group({
            skillname: this.skills[i].skills[j].skillname,
            skill_level: this.skills[i].skills[j].skill_level,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.addNewSkillcategory(); }
  }

  addSkill(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      skillname: '',
      skill_level: '',

    }));
  }

  addNewSkillcategory = function () {
    var form = this.fb.group({
      skillcategory: '',
      formArray: this.fb.array([])
    });

    this.addSkill(form);
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
          this.skills.splice(ind, 1);
        }
      }
    }
  }

  deleteskill(form, i) {
    const ind = this.forms.indexOf(form);
    var field = <FormArray>this.forms[ind].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
      field.controls.splice(i, 1);
      this.skills[ind].skills.splice(i, 1);
    }
  }
  
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addSkill(this.forms[i].value, i);
      }
    }
  }

}
