export class Model {
        header:Header = new Header();
        main : Main = new Main();
    }
export class Header{
    leftInformation:LeftInformation = new LeftInformation();
    middelInformation:MiddelInformation = new MiddelInformation();
    rightInformation:RightInformation = new RightInformation();
}
export class LeftInformation{
    personalName : string;
    carrer : string;
    summary : string;
}
export class MiddelInformation{
    personalPhoto:string;
}
export class RightInformation{
    email : string;
    phone : string;
    country : string;
    github : string;
    newcontacts :string[] = [];
    photo :string[] = [];
}
export class Main{
    leftContent :LeftContent = new LeftContent();
    rightContent :RightContent = new RightContent();
}
export class LeftContent{
    works : Work = new Work();
    educations : Education = new Education();
    projects : Projects = new Projects();
}
export class RightContent{
    skills : Skillcatagory = new Skillcatagory();
    courses : Courses =new Courses();
    achivement : Achievements = new Achievements();
    languages : Languages = new Languages();
    interests : Interests = new Interests();
}

export class Work{
    starttime : string;
    endtime : string;
    location : string;
    jobname :string ;
    companyname : string;
    tasks : Tasks[] = [];
}
export class Tasks{
    task:string;
}
export class Education{
    starttime : string;
    endtime : string;
    educationName : string;
    unviName :string ;
    educourses : EduCourses[] = [];
}
export class EduCourses{
    educourse:string;
}
export class Projects{
    projectname:string;
    roles:Roles[]=[];
}
export class Roles{
    role:string;
}
export class Skillcatagory{
    skillcategory : string;
    skills :Skills[]=[];
}
export class Skills{
    name:string;
    level:number;
}
export class Courses{
    course:string[];
}
export class Achievements{
    achive :string[];
}
export class Languages{
    language : Language[]=[];
}
export class Language {
    name:string;
    level:string;
}
export class Interests{
    interest :string[];
}