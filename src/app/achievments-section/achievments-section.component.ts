import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Achievements } from '../Model';

@Component({
  selector: 'app-achievments-section',
  templateUrl: './achievments-section.component.html',
  styleUrls: ['./achievments-section.component.css']
})
export class AchievmentsSectionComponent implements OnInit {
  forms: FormGroup[] = [];
  achievements: Achievements[];;

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.achievements = this.taskService.achievements;
  }

  ngOnInit() {
    this.found();

  }
  found(): void {
    if (this.achievements && this.achievements.length) {
      for (let i = 0; i < this.achievements.length; i++) {
        var form = this.fb.group({
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.achievements[i].achievements.length; j++) {
          arrayControl.push(this.fb.group({
            achievement: this.achievements[i].achievements[j].achievement,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.achivement(); }
  }
  addachivement(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      achievement: '',
    }));
  }
  achivement(): void {
    var form = this.fb.group({
      formArray: this.fb.array([])
    });
    this.addachivement(form);
    this.forms.push(form);
  }
  delete(i) {
    var field = <FormArray>this.forms[0].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
      field.controls.splice(i, 1);
      this.achievements[0].achievements.splice(i, 1);
    }
  }
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addAchive(this.forms[i].value, i);
      }
    }
  }
}
