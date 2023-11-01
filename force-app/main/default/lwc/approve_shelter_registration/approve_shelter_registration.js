import { LightningElement } from 'lwc';
import backgroundShelterImg  from '@salesforce/resourceUrl/shelterImg';
import shleter_obj from '@salesforce/schema/approve_shelter__c';
import NAME_FIELD from '@salesforce/schema/approve_shelter__c.Name';
import Address__FIELD from '@salesforce/schema/approve_shelter__c.Address__c';
import Email__FIELD from '@salesforce/schema/approve_shelter__c.Email__c';
import Gender__FIELD from '@salesforce/schema/approve_shelter__c.Gender__c';
import Designation__FIELD from '@salesforce/schema/approve_shelter__c.Designation__c';
import Mobile_number__FIELD from '@salesforce/schema/approve_shelter__c.Mobile_number__c';
import Causes_You_Support__FIELD from '@salesforce/schema/approve_shelter__c.Causes_You_Support__c';
import Last_Year_s_Income__FIELD from '@salesforce/schema/approve_shelter__c.Last_Year_s_Income__c';
import Last_Year_s_Expenditure__FIELD from '@salesforce/schema/approve_shelter__c.Last_Year_s_Expenditure__c';
import Registration_of_NGO_as__FIELD from '@salesforce/schema/approve_shelter__c.Registration_of_NGO_as__c';
import PAN__FIELD from '@salesforce/schema/approve_shelter__c.PAN__c';
import X80G_Registration_Number__FIELD from '@salesforce/schema/approve_shelter__c.X80G_Registration_Number__c';
import X12A_Registration_Number__FIELD from '@salesforce/schema/approve_shelter__c.X12A_Registration_Number__c';


export default class Approve_shelter_registration extends LightningElement {

   fields = [NAME_FIELD,Address__FIELD,Email__FIELD,Gender__FIELD,Designation__FIELD,Mobile_number__FIELD,Causes_You_Support__FIELD,Last_Year_s_Income__FIELD,Last_Year_s_Expenditure__FIELD,Registration_of_NGO_as__FIELD,PAN__FIELD,X80G_Registration_Number__FIELD,X12A_Registration_Number__FIELD];

    objectApiName=shleter_obj;
    imageUrl = backgroundShelterImg;

    get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    
}
}