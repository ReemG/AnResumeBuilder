import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-achievments-section',
  templateUrl: './achievments-section.component.html',
  styleUrls: ['./achievments-section.component.css']
})
export class AchievmentsSectionComponent implements OnInit {
forms: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.achivement();
  }
  addachivement(form):void{
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      achievement: '',
    }));
  }
  achivement() :void{
    var form = this.fb.group({
      formArray: this.fb.array([])
    });
    this.addachivement(form);
    this.forms.push(form);

  }
}
