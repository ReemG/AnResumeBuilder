import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-languages-section',
  templateUrl: './languages-section.component.html',
  styleUrls: ['./languages-section.component.css']
})
export class LanguagesSectionComponent implements OnInit {
forms: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
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
  getData(): void{
     for(const form of this.forms){
       if(form.value!== ""){
       this.taskSevice.addLang(form.value);
       }
     }
   }

}
