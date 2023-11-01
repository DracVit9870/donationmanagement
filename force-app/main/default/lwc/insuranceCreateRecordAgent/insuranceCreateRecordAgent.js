import { LightningElement,track } from 'lwc';
import Agent_OBJECT from '@salesforce/schema/Agent__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class InsuranceCreateRecordAgent extends LightningElement {

    title = 'Congratulation';
    message = 'Your record has been successfully created.';
    variant = 'success';
    @track RemoveFormAgent=true;
    @track objectApiName=Agent_OBJECT;
    submitHandler(event)
    {
        const evt = new ShowToastEvent({
            title: this.title,
            message: this.message,
            variant: this.variant,
        });
        this.dispatchEvent(evt);
        
     }
     closePopup()
     {
        this.RemoveFormAgent=false;
     }
}