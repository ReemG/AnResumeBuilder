import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PersonalPhotoComponent } from './personal-photo/personal-photo.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';

import { MaincontentComponent } from './maincontent/maincontent.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { RightContentComponent } from './right-content/right-content.component';

import { WorkSectionComponent } from './work-section/work-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { CoursesSectionComponent } from './courses-section/courses-section.component';
import { AchievmentsSectionComponent } from './achievments-section/achievments-section.component';
import { LanguagesSectionComponent } from './languages-section/languages-section.component';
import { InterestsSectionComponent } from './interests-section/interests-section.component';

import {TaskService} from './task.service';
import {RouterModule , Routes } from '@angular/router';
import { SaveAllComponent } from './save-all/save-all.component';
import { FinallResumeComponent } from './finall-resume/finall-resume.component';



const appRoutes :Routes = [
  {path: 'myresume' , component:FinallResumeComponent},
  {path:'index', component:MaincontentComponent},
  {path:'',redirectTo: '/index',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    PersonalInformationComponent,
    PersonalPhotoComponent,
    ContactInformationComponent,

    MaincontentComponent,
    LeftContentComponent,
    RightContentComponent,
    
    WorkSectionComponent,
    EducationSectionComponent,
    ProjectsSectionComponent,

    SkillsSectionComponent,
    CoursesSectionComponent,
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
  ],
  providers: [TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
