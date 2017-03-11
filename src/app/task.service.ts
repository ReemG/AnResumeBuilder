import { Injectable } from '@angular/core';
import { Model } from './Model';
import { Work } from './Model';
import { Education } from './Model';
import {Projects} from './Model';
import {Skillcatagory} from './Model';
import {Courses} from './Model';
import {Achievements} from './Model';
import {Languages} from './Model';
import {Interests} from './Model';

@Injectable()
export class TaskService {
  model: Model = new Model();
  works: Work[] = [];
  educations: Education[] = [];
  projects: Projects[] = [];
  skills: Skillcatagory[] = [];
  courses :Courses[]=[];
  achievements: Achievements[] = [];
  languages: Languages[] = [];
  Interests: Interests[]=[];
  constructor() { }

  addWork(work): void {
    work.tasks = work.formArray;
    this.works.push(work);
  }
  addEdu(edu): void {
    edu.educourses = edu.formArray;
    this.educations.push(edu);
  }
  addProj(proj):void{
    proj.roles = proj.formArray;
    this.projects.push(proj);
  }
  addSkill(skill):void{
    skill.skills = skill.formArray;
    this.skills.push(skill);
  }
  addCourse(course):void{
    course.course = course.formArray;
    this.courses.push(course);
  }
   addAchive(achivement):void{
    achivement.achive = achivement.formArray;
    this.achievements.push(achivement);
  }
  addLang(lang){
    lang.language = lang.formArray;
    this.languages.push(lang);
  }
   addInterest(Interest){
    Interest.interest = Interest.formArray;
    this.Interests.push(Interest);
  }

}

