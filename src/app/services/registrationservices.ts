import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {ApplicationModel} from '../Models/registration-model';

import{Observable} from 'rxjs';

@Injectable()
export class ApplicationService{
    applications:any;
    list:ApplicationModel[];
    constructor(private myHttp:HttpClient){
        this.applications=[];
    }
ApplicationRegistrationPage(applicationreg:ApplicationModel):boolean{
    this.myHttp.post("http://localhost:50179/api/Values",applicationreg).subscribe(res=>{
        console.log(res);
    })
    return true;
}

}