import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interests-section',
  templateUrl: './interests-section.component.html',
  styleUrls: ['./interests-section.component.css']
})
export class InterestsSectionComponent implements OnInit {
  forms: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.interest();
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

}
