import { Injectable } from '@angular/core';
import { PersonalInformation } from './Model';
import { PersonalPhoto } from './Model';
import { ContactInformation } from './Model';
import { Work } from './Model';
import { Education } from './Model';
import { Projects } from './Model';
import { Skillcatagory } from './Model';
import { Courses } from './Model';
import { Achievements } from './Model';
import { Languages } from './Model';
import { Interests } from './Model';

@Injectable()
export class TaskService {
  personalinfo: PersonalInformation[] = [];
  personalphoto = new PersonalPhoto();
  contactinformations: ContactInformation[] = [];
  works: Work[] = [];
  educations: Education[] = [];
  projects: Projects[] = [];
  skills: Skillcatagory[] = [];
  courses: Courses[] = [];
  achievements: Achievements[] = [];
  languages: Languages[] = [];
  Interests: Interests[] = [];
  constructor() { }

  addInfo(info, index): void {
    this.personalinfo[index] = info;
  }
  addContact(contactinfo, index): void {
    contactinfo.newcontacts = contactinfo.formArray;
    this.contactinformations[index] = contactinfo;
  }
  addWork(work, index): void {
    work.tasks = work.formArray;
    this.works[index] = work;
  }
  addEdu(edu, index): void {
    edu.educourses = edu.formArray;
    this.educations[index] = edu;
  }
  addProj(proj, index): void {
    proj.roles = proj.formArray;
    this.projects[index] = proj;
  }
  addSkill(skill, index): void {
    skill.skills = skill.formArray;
    this.skills[index] = skill;
  }
  addCourse(course, index): void {
    course.courses = course.formArray;
    this.courses[index] = course;
  }
  addAchive(achivement, index): void {
    achivement.achievements = achivement.formArray;
    this.achievements[index] = achivement;
  }
  addLang(lang, index) {
    lang.language = lang.formArray;
    this.languages[index] = lang;
  }
  addInterest(Interest, index) {
    Interest.interests = Interest.formArray;
    this.Interests[index] = Interest;
  }

}

