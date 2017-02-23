import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    InterestsSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
