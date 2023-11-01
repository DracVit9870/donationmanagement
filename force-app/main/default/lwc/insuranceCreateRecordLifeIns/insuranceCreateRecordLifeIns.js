import { LightningElement,track } from 'lwc';
import LifeInsuranceHolder_OBJECT from '@salesforce/schema/Life_Insurance__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class InsuranceCreateRecordLifeIns extends LightningElement {

    title = 'Congratulation';
    message = 'Your record has been successfully created.';
    variant = 'success';
    @track RemoveFormLifeInsurance=true;
    @track objectApiName=LifeInsuranceHolder_OBJECT;
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
        this.RemoveFormLifeInsurance=false;
     }
}