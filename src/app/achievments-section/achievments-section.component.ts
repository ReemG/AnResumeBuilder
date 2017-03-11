import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-achievments-section',
  templateUrl: './achievments-section.component.html',
  styleUrls: ['./achievments-section.component.css']
})
export class AchievmentsSectionComponent implements OnInit {
forms: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
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
  getData(): void{
     for(const form of this.forms){
       if(form.value!== ""){
       this.taskSevice.addAchive(form.value);
       }
     }
   }
}
