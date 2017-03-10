import { Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {ActivatedRoute} from '@angular/router';
import {LeftInformation} from '../Model';

@Component({
  selector: 'app-left-header',
  templateUrl: './left-header.component.html',
  styleUrls: ['./left-header.component.css']
})
export class LeftHeaderComponent implements OnInit {
leftInformation : LeftInformation;

  constructor(private route :ActivatedRoute,
              private taskSevice: TaskService
              ) {

    this.leftInformation = this.taskSevice.model.header.leftInformation;
      
          }
  ngOnInit() {
  }
    
  }
 