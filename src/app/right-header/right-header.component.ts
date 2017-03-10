import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RightInformation} from '../Model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-right-header',
  templateUrl: './right-header.component.html',
  styleUrls: ['./right-header.component.css']
})
export class RightHeaderComponent implements OnInit {
   forms: FormGroup[] = [];
   rightInformation : RightInformation;
  constructor(private fb: FormBuilder,
              private taskSevice: TaskService) {
  this.rightInformation = this.taskSevice.model.header.rightInformation;
               }


  ngOnInit() {
     this.Skill();
  }
  addNewContact (form): void  {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      newcontact: '',
    }));
    let newContact = arrayControl.at(arrayControl.length-2);
    if(newContact) {
     this.rightInformation.newcontacts.push(newContact.value.newcontact);
    }
    
  }
 
  Skill = function () {
    var form = this.fb.group({
      email:'',
      phone:'',
      country:'',
      github:'',
      formArray: this.fb.array([])
    });
 
    this.addNewContact(form);
    this.forms.push(form);
  }
}

