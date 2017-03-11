import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../task.service';
@Component({
  selector: 'app-interests-section',
  templateUrl: './interests-section.component.html',
  styleUrls: ['./interests-section.component.css']
})
export class InterestsSectionComponent implements OnInit {
  forms: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
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
  getData(): void{
     for(const form of this.forms){
       if(form.value!== ""){
       this.taskSevice.addInterest(form.value);
       }
     }
   }
  

}
