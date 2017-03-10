import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../task.service';
import {Work} from '../work';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {

  forms: FormGroup[] = [];
  work : Work = new Work();

  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
  }

  ngOnInit() {
    this.addNewWork();
  }

  
  addTask(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      achievement: '',
    }));
  }
  
  addNewWork = function () {
    var form = this.fb.group({
      starttime:'',
      endtime:'',
      location:'',
      jobname:'',
      companyname:'',
      formArray: this.fb.array([])
    });
 
    this.addTask(form);
    this.forms.push(form);
  }

    getData(): void{
     for(const form of this.forms){
       if(form.value!== ""){
       this.taskSevice.addWork(form.value);
       }
     }
   }
}
