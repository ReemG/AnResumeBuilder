import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-languages-section',
  templateUrl: './languages-section.component.html',
  styleUrls: ['./languages-section.component.css']
})
export class LanguagesSectionComponent implements OnInit {
forms: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.language();
  }

  addlanguage(form): void{
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      newlanguagename: '',
      newlevel:'',
    }));
  }
  language  = function () {
    var form = this.fb.group({
      formArray: this.fb.array([])
    });
    this.addlanguage(form);
    this.forms.push(form);
  }

}
