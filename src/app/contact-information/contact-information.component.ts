import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInformation } from '../Model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {
  forms: FormGroup[] = [];
  contactInformations: ContactInformation[];
  complexForm: FormGroup;
  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.contactInformations = this.taskService.contactinformations;
  }


  ngOnInit() {
    this.found();
  }

  found(): void {
    if (this.contactInformations && this.contactInformations.length) {
      for (let i = 0; i < this.contactInformations.length; i++) {
        var form = this.fb.group({
          email: this.contactInformations[i].email,
          phone: this.contactInformations[i].phone,
          country: this.contactInformations[i].country,
          github: this.contactInformations[i].github,
          formArray: this.fb.array([])
        });
        const arrayControl = <FormArray>form.controls['formArray'];
        for (var j = 0; j < this.contactInformations[i].newcontacts.length; j++) {
          arrayControl.push(this.fb.group({
            newcontact: this.contactInformations[i].newcontacts[j].newcontact,
          }));
        }
        this.forms.push(form);
      }
    }
    else { this.Skill(); }
  }

  addNewContact(form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      newcontact: '',
    }));
  }

  Skill = function () {
    var form = this.fb.group({
      email: '',
      phone: '',
      country: '',
      github: '',
      formArray: this.fb.array([])
    });

    this.addNewContact(form);
    this.forms.push(form);
  }
  
  getData(): void {
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].value !== "") {
        this.taskService.addContact(this.forms[i].value, i);
      }
    }
  }
}

