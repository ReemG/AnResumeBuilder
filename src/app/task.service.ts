import { Injectable } from '@angular/core';
import {Model} from './Model';
import { Work } from './work';
import { Achievements } from './work';

@Injectable()
export class TaskService {
  model: Model =new Model();
  works: Work[] = [];
  achievements : Achievements[]=[];
  private id=0;
  constructor() { }

  addWork(work):void{
  work.id = this.id++;
  work.achievements = work.formArray;
  console.log(work.formArray);
  console.log(work.achievements);
  // for(var i=0;i<work.formArray.length;i++){
  //   work.achievements.push(work.formArray[i].achievement);
  //     //this.ach.push(work.formArray[i].achievement);
  //    // console.log(work.formArray[i].achievement.id);
  // }
  this.works.push(work);
  }
}

