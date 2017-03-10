import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import {Model} from '../Model';
import {Work} from '../work';
import { Achievements } from '../work';


@Component({
  selector: 'app-finall-resume',
  templateUrl: './finall-resume.component.html',
  styleUrls: ['./finall-resume.component.css']
})
export class FinallResumeComponent implements OnInit {
model:Model;
works :Work[];
//ach : Achievements[];

//works = this.model.main.leftContent.works;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService, ) {
    this.model = this.taskService.model;
    this.works = this.taskService.works;
    //this.ach = this.taskService.ach;
    // this.works = this.model.main.leftContent.works;
    //console.log(works);
  }

  ngOnInit() {
     
  }
  
}
