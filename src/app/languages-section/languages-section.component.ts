import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Languages } from '../Model';

@Component({
  selector: 'app-languages-section',
  templateUrl: './languages-section.component.html',
  styleUrls: ['./languages-section.component.css']
})
export class LanguagesSectionComponent implements OnInit {
  forms: FormGroup[] = [];
  languages: Languages[] = [];

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.languages = this.taskService.languages;
  }

  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.languages && this.languages.length) {
      for (let i = 0; i < this.languages.length; i++) {
        var form = this.fb.group({
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.languages[i].language.length; j++) {
          arrayControl.push(this.fb.group({
            newlanguagename: this.languages[i].language[j].newlanguagename,
            newlevel: this.languages[i].language[j].newlevel,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.language(); }
  }

  addlanguage(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      newlanguagename: '',
      newlevel: '',
    }));
  }
  
  language = function () {
    var form = this.fb.group({
      formArray: this.fb.array([])
    });
    this.addlanguage(form);
    this.forms.push(form);
  }

  delete(i) {
    var field = <FormArray>this.forms[0].controls['formArray'];
    if (field.controls.length === 1)
    { alert("Can't Delete"); }
    else {
      field.controls.splice(i, 1);
      this.languages[0].language.splice(i, 1);
    }
  }
  
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addLang(this.forms[i].value, i);
      }
    }
  }

}
