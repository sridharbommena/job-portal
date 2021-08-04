export interface post
{
    // id:number;
    // heading:string;
    // description:string;
    // img_url: string;
    // links:string;
    // original_apply_link:string;
    // date:string;
        id : number;
        post_date:string;
        semi_heading: string;
        heading: string;
        description: string;
        img_url: string;
        job_role: string;
        qualification:	string;
        batch: string;
        experience: string;
        salary:	string;
        job_location: string;
        drive_location:string;
        drive_date:string;
        last_date:string;
        detailed_eligibility: Array<string>;
        professional_experience:Array<string>;
        skills:Array<string>;
        job_description: Array<string>;
        apply_link: string;
}