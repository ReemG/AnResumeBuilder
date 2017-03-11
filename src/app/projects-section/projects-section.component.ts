import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  forms: FormGroup[] = [];
  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
  }

  ngOnInit() {
    this.addNewProject();
  }

  addrole (form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      role:'',
    }));
  }
  
  addNewProject = function () {
    var form = this.fb.group({
      projectname: '',
      formArray: this.fb.array([])
    });
 
    this.addrole(form);
    this.forms.push(form);
  }
  getData(): void{
     for(const form of this.forms){
       if(form.value!== ""){
       this.taskSevice.addProj(form.value);
       }
     }
   }
}
