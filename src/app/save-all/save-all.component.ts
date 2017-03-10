import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../task.service';
@Component({
  selector: 'app-save-all',
  templateUrl: './save-all.component.html',
  styleUrls: ['./save-all.component.css']
})
export class SaveAllComponent implements OnInit {
  
  constructor(private route :ActivatedRoute,private taskSevice: TaskService) { }

  ngOnInit() {
  }
  save(){
    //console.log(this.taskSevice.model);
  }
  
}
