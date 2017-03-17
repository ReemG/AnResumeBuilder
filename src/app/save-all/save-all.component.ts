import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { PersonalInformation } from '../Model';
import { ContactInformation } from '../Model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-save-all',
    templateUrl: './save-all.component.html',
    styleUrls: ['./save-all.component.css']
})
export class SaveAllComponent implements OnInit {
    personalinfo: PersonalInformation[];
    contactinformation: ContactInformation[];
    constructor(private router: Router, 
                private taskService: TaskService) {
        this.personalinfo = this.taskService.personalinfo;
        this.contactinformation = this.taskService.contactinformations;
    }

    ngOnInit() {
    }
    
    save(routerlink: string) {
        if (this.personalinfo.length > 0
            && this.contactinformation.length > 0

            && this.personalinfo[0].personalName !== ""
            && this.personalinfo[0].personalName !== undefined

            && this.personalinfo[0].carrer !== ""
            && this.personalinfo[0].carrer !== undefined

            && this.contactinformation[0].phone !== ""
            && this.contactinformation[0].phone !== undefined

            && this.contactinformation[0].email !== ""
            && this.contactinformation[0].email !== undefined

            && this.contactinformation[0].country !== ""
            && this.contactinformation[0].country !== undefined) {
            this.router.navigate([routerlink]);
            return true;
        }
        else {
            alert("Enter the required * fields.");
            return false;
        }
    }
}




