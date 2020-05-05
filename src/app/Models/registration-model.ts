export class ApplicationModel{
    ApplicationName:string;
    ApplicationDescription :string;
    ApplicationId:string;
    IsDeleted:any;
    
    constructor(applicationName?,applicationDescription?,applicationId?)
    {
        this.ApplicationName = applicationName;
        this.ApplicationDescription = applicationDescription;
        this.ApplicationId = applicationId;
    }
    }