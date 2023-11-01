import { LightningElement,track } from 'lwc';
import MotorInsurance_OBJECT from '@salesforce/schema/Motor_Insurance__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class InsuranceCreateRecordMotorIns extends LightningElement {

    title = 'Congratulation';
    message = 'Your record has been successfully created.';
    variant = 'success';
    @track RemoveFormMotorIns=true;
    @track objectApiName=MotorInsurance_OBJECT;
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
        this.RemoveFormMotorIns=false;
     }
}