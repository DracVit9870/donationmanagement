import { LightningElement, track } from 'lwc';
import fetchpolicy from '@salesforce/apex/policyRecord.fetchpolicy';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const coll=[{label:'NAME',fieldname:'Name'},
            {label:'DOB',fieldname:'DOB__c'},
            {label:'Gender',fieldname:'Gender__c'},
            {label:'Phone',fieldname:'Phone__c'},
            {label:'Email',fieldname:'Email__c'},
            {label:'Occupation',fieldname:'Occupation__c'},
            {label:'Annual Income',fieldname:'Income_Per_Annum__c'},
            {label:'Address',fieldname:'Address__c'},
            {label:'Agent Name',fieldname:'Agent_name__c'},
            {label:'CreatedDate',fieldname:'CreatedDate'},
            {label:'CreatedDate',fieldname:'LastModifiedDate'}];

export default class PolicyHolderDetail extends LightningElement 
{
    @track poldata;
    columns=coll;
    searchHandler(event)
{
var holderId=this.template.querySelector("lightning-input[data-king=client]").value;


    fetchpolicy({polId : holderId}).then(result =>{
        this.poldata=result;
        if(result == null)
        {
            const evt = new ShowToastEvent({
                title: 'Error message',
                message: 'Please enter valid policy holder ID..',
                variant: 'error',
            });
            this.dispatchEvent(evt);
        }
        
      
    }).catch(error =>{
        console.log('error occured');
    });
 
}
}