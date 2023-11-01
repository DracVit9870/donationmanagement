import { LightningElement } from 'lwc';
import Pledge_obj from "@salesforce/schema/Pledges__c";
import Name_field from "@salesforce/schema/Pledges__c.Name";
import status_field from "@salesforce/schema/Pledges__c.Status__c";
import Category_Level_1__c_field from "@salesforce/schema/Pledges__c.Category_Level_1__c";
import Category_Level_2__c_field from "@salesforce/schema/Pledges__c.Category_Level_2__c";
import Campaign__c_field from "@salesforce/schema/Pledges__c.Campaign__c";
import Donor__c_field from "@salesforce/schema/Pledges__c.Donor__c";
import Request__c_field from "@salesforce/schema/Pledges__c.Request__c";


export default class PledgeForDonor extends LightningElement 
{
    Pledges__c=Pledge_obj;
    myFields=[Name_field,status_field,Category_Level_1__c_field,Category_Level_2__c_field,Campaign__c_field,Donor__c_field,Request__c_field];

   
    handleOnSuccess(event){
        
        alert('id '+event.detail.id);
    }
   
    
}