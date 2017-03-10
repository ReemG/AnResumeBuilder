import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
    forms: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.addNewSkillcategory();
  }

  
  addSkill (form): void {
    const arrayControl = <FormArray>form.controls['formArray'];
    arrayControl.push(this.fb.group({
      skillname: '',
      skill_level:'',
      
    }));
  }
  
  addNewSkillcategory = function () {
    var form = this.fb.group({
      skillcategory:'',
      formArray: this.fb.array([])
    });
 
    this.addSkill(form);
    this.forms.push(form);
  }

}
