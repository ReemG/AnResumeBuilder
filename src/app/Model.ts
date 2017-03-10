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
}
export class Main{
    leftContent :LeftContent = new LeftContent();
    //rightContent :RightContent = new RightContent();
}
export class LeftContent{
    //works : Works = new Works();
    //educations : Educations = new Educations();
    //projects : Projects = new Projects();
}
export class RightContent{}
// export class Works{
//     starttime : string;
//     endtime : string;
//     location : string;
//     jobname :string ;
//     companyname : string;
//     achievements : string[] = [];
// }
export class Educations{}
export class Projects{}