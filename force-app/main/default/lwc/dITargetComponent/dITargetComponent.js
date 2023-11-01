import { LightningElement,track,api } from 'lwc';

export default class DITargetComponent extends LightningElement {
    @track finalRecordIdValue;

   @api get recordId()
    {
        return this.finalRecordIdValue;
    }
    set recordId(valueee)
    {
this.finalRecordIdValue=valueee;
    }

}