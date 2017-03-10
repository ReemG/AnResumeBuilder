import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftHeaderComponent } from './left-header/left-header.component';
import { MiddelHeaderComponent } from './middel-header/middel-header.component';
import { RightHeaderComponent } from './right-header/right-header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { RightContentComponent } from './right-content/right-content.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { AchievmentsSectionComponent } from './achievments-section/achievments-section.component';
import { LanguagesSectionComponent } from './languages-section/languages-section.component';
import { InterestsSectionComponent } from './interests-section/interests-section.component';

import {TaskService} from './task.service';
import {Model} from './Model';
import {RouterModule , Routes } from '@angular/router';
import { SaveAllComponent } from './save-all/save-all.component';
import { FinallResumeComponent } from './finall-resume/finall-resume.component';
//import {WebStorageModule, LocalStorageService} from "angular2-localstorage";

const appRoutes :Routes = [
  {path: 'save' , component:FinallResumeComponent},
  {path:'index', component:MaincontentComponent},
  {path:'',redirectTo: '/index',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftHeaderComponent,
    MiddelHeaderComponent,
    RightHeaderComponent,
    MaincontentComponent,
    LeftContentComponent,
    RightContentComponent,
    WorkSectionComponent,
    EducationSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    AchievmentsSectionComponent,
    LanguagesSectionComponent,
    InterestsSectionComponent,
    SaveAllComponent,
    FinallResumeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  //WebStorageModule
  ],
  providers: [TaskService
    //LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
