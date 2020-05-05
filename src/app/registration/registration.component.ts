import { Component, OnInit } from '@angular/core';
import { ApplicationService} from '../services/registrationservices';
import { ApplicationModel} from '../Models/registration-model';

class Registration {
  constructor(
    public ApplicationName: string = '',
    public ApplicationDescription: string = '',
   
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrations: ApplicationModel[] = [];
  regModel: ApplicationModel;
  //regModel: Registration;
  result:string;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  
  
  constructor(private registrationservice:ApplicationService) {
    // Add default registration data.
    this.regModel = new ApplicationModel();
    this.registrations.push(new ApplicationModel('Instagram', 'Social Media App For Connecting People'));
    this.registrations.push(new ApplicationModel('Gmail', 'Sending And Receiving Mails and Organising Mails'));
    this.registrations.push(new ApplicationModel('Zomato', 'Food Ordering Application'));
  }

  ngOnInit() {}

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new ApplicationModel();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
   
    
  }

  // This method associate to Save Button.
  // onSave() {
   
  //   if (this.submitType === 'Save') {
  //     // Push registration model object into registration list.
  //     this.registrations.push(this.regModel);
  //   } else {
  //     // Update the existing properties values based on model.
  //     this.registrations[this.selectedRow].ApplicationName = this.regModel.ApplicationName;
  //     this.registrations[this.selectedRow].ApplicationDescription = this.regModel.ApplicationDescription;
     
  //   }
  //   // Hide registration entry section.
  //   this.showNew = false;
  // }

  onSave()
  {
    console.log();
    if(this.registrationservice.ApplicationRegistrationPage(this.regModel))
       {
        this.registrations.push(this.regModel);
       }
       else{
        this.registrations[this.selectedRow].ApplicationName = this.regModel.ApplicationName;
        this.registrations[this.selectedRow].ApplicationDescription = this.regModel.ApplicationDescription;
       }
       this.showNew=false;

  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new ApplicationModel();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

 
}














