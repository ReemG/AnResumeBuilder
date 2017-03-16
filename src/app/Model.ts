export class PersonalInformation {
    personalName: string;
    carrer: string;
    summary: string;
}
export class PersonalPhoto {
    personalPhoto: string = "";
}
export class ContactInformation {
    email: string;
    phone: string;
    country: string;
    github: string;
    newcontacts: NewContact[] = [];
}
export class NewContact {
    newcontact: string;
}
export class Work {
    starttime: string;
    endtime: string;
    location: string;
    jobname: string;
    companyname: string;
    tasks: Tasks[] = [];
}
export class Tasks {
    task: string;
}
export class Education {
    starttime: string;
    endtime: string;
    educationName: string;
    unviName: string;
    educourses: EduCourses[] = [];
}
export class EduCourses {
    coursename: string;
}
export class Projects {
    projectname: string;
    roles: Roles[] = [];
}
export class Roles {
    role: string;
}
export class Skillcatagory {
    skillcategory: string;
    skills: Skills[] = [];
}
export class Skills {
    skillname: string;
    skill_level: number;
}
export class Courses {
    courses: Course[] = [];
}
export class Course {
    course: string[];
}
export class Achievements {
    achievements: Achievement[] = [];
}
export class Achievement {
    achievement: string;;
}
export class Languages {
    language: Language[] = [];
}
export class Language {
    newlanguagename: string;
    newlevel: string;
}
export class Interests {
    interests: Interest[] = [];
}
export class Interest {
    interest: string;
}