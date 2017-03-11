import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import {Model} from '../Model';
import {Work} from '../Model';
import {Education} from '../Model';
import {Projects} from '../Model';
import {Skillcatagory} from '../Model';
import {Courses} from '../Model';
import {Achievements} from '../Model';
import {Languages} from '../Model';
import {Interests} from '../Model';

@Component({
  selector: 'app-finall-resume',
  templateUrl: './finall-resume.component.html',
  styleUrls: ['./finall-resume.component.css']
})
export class FinallResumeComponent implements OnInit {
model:Model;
works :Work[];
educations :Education[];
projects :Projects[];
skills :Skillcatagory[];
courses : Courses[];
achievements : Achievements[];
languages : Languages[];
Interests : Interests[];
  constructor(private route: ActivatedRoute,
              private taskService: TaskService, ) {
    this.model = this.taskService.model;
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
  
}
