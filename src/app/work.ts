export class Work{
    id:number;
    starttime : string;
    endtime : string;
    location : string;
    jobname :string ;
    companyname : string;
    achievements : Achievements[] = [];
}
export class Achievements{
    achieves:string;
}