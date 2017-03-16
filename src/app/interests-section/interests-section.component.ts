import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Interests } from '../Model';

@Component({
  selector: 'app-interests-section',
  templateUrl: './interests-section.component.html',
  styleUrls: ['./interests-section.component.css']
})
export class InterestsSectionComponent implements OnInit {
  forms: FormGroup[] = [];
  Interests: Interests[];

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.Interests = this.taskService.Interests;
  }

  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.Interests && this.Interests.length) {
      for (let i = 0; i < this.Interests.length; i++) {
        var form = this.fb.group({
          formArray: this.fb.array([])
        })
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.Interests[i].interests.length; j++) {
          arrayControl.push(this.fb.group({
            interest: this.Interests[i].interests[j].interest,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.interest(); }
  }

  addinterest(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      interest: '',
    }));
  }

  interest = function () {
    var form = this.fb.group({
      formArray: this.fb.array([])
    });
    this.addinterest(form);
    this.forms.push(form);
  }

  delete(i) {
    var field = <FormArray>this.forms[0].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
      field.controls.splice(i, 1);
      this.Interests[0].interests.splice(i, 1);
    }
  }
  
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addInterest(this.forms[i].value, i);
      }
    }
  }


}
