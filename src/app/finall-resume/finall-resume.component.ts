import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { PersonalInformation } from '../Model';
import { PersonalPhoto } from '../Model';
import { ContactInformation } from '../Model';
import { Work } from '../Model';
import { Education } from '../Model';
import { Projects } from '../Model';
import { Skillcatagory } from '../Model';
import { Courses } from '../Model';
import { Achievements } from '../Model';
import { Languages } from '../Model';
import { Interests } from '../Model';
import * as jsPDF from 'jspdf';

declare let html2canvas;

@Component({
  selector: 'app-finall-resume',
  templateUrl: './finall-resume.component.html',
  styleUrls: ['./finall-resume.component.css']
})
export class FinallResumeComponent implements OnInit {
  personalinfo: PersonalInformation[];
  personalphoto = new PersonalPhoto();
  contactinformation: ContactInformation[];
  works: Work[];
  educations: Education[];
  projects: Projects[];
  skills: Skillcatagory[];
  courses: Courses[];
  achievements: Achievements[];
  languages: Languages[];
  Interests: Interests[];

  photoname: string;
  photo(newcontact: string): string {
    if ((newcontact).includes("linkedin"))
    { this.photoname = "linkedin.png"; }
    else if ((newcontact).includes("gmail") || (newcontact).includes("yahoo"))
    { this.photoname = "mail.png"; }
    else { this.photoname = "empty.png"; }
    return this.photoname;
  }

  constructor(private route: ActivatedRoute,
              private taskService: TaskService, ) {
    this.personalinfo = this.taskService.personalinfo;
    this.personalphoto = this.taskService.personalphoto;
    this.contactinformation = this.taskService.contactinformations;
    this.works = this.taskService.works;
    this.educations = this.taskService.educations;
    this.projects = this.taskService.projects;
    this.skills = this.taskService.skills;
    this.courses = this.taskService.courses;
    this.achievements = this.taskService.achievements;
    this.languages = this.taskService.languages;
    this.Interests = this.taskService.Interests;
  }


  ngOnInit() {
  }
  
  download() {
    var button = document.getElementById("downloadButton");
    button.style.visibility = 'hidden';
    html2canvas(document.body, {
      onrendered: function (canvas) {
        var doc = new jsPDF("p", "mm", "a4");
        var width = doc.internal.pageSize.width;
        var height = doc.internal.pageSize.height;
        var img = canvas.toDataURL("image/png", 1.0);
        doc.addImage(img, 'JPEG', 0, 3, width, height);
        doc.save("Resume.pdf");
      }
    });
    button.style.visibility = 'visible';
  }

}
