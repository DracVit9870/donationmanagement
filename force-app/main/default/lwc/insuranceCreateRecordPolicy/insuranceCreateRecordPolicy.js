import { LightningElement, track, wire } from 'lwc';
import PolicyHolder_OBJECT from '@salesforce/schema/Policy_Holder__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class InsuranceCreateRecordPolicy extends LightningElement {

    title = 'Congratulation';
    message = 'Your record has been successfully created.';
    variant = 'success';
    @track RemoveFormPolicy=true;
    @track objectApiName=PolicyHolder_OBJECT;
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
        this.RemoveFormPolicy=false;
     }
}