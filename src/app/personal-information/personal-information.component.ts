import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { PersonalInformation } from '../Model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  personalinformation: PersonalInformation[];
  forms: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.personalinformation = this.taskService.personalinfo;
  }
  
  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.personalinformation && this.personalinformation.length) {
      for (let i = 0; i < this.personalinformation.length; i++) {
        var form = this.fb.group({
          personalName: this.personalinformation[i].personalName,
          carrer: this.personalinformation[i].carrer,
          summary: this.personalinformation[i].summary,
          formArray: this.fb.array([])
        });
        this.forms.push(form);
      }
    }
    else { this.info(); }
  }

  info(): void {
    var form = this.fb.group({
      personalName: '',
      carrer: '',
      summary: '',
      formArray: this.fb.array([])
    });
    this.forms.push(form);
  }
  
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addInfo(this.forms[i].value, i);
      }
    }
  }

}
