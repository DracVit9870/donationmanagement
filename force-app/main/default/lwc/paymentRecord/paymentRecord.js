import { LightningElement, track, wire } from 'lwc';
import Paymentt_OBJECT from '@salesforce/schema/Paymentt__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PaymentRecord extends LightningElement {
    title = 'Congratulation';
    message = 'Your record has been successfully created.';
    variant = 'success';
    @track RemoveFormPayment=true;
    @track objectApiName=Paymentt_OBJECT;
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
        this.RemoveFormPayment=false;
     }
}