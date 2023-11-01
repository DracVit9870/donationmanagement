import { LightningElement,api } from 'lwc';

export default class RecordFormLWC extends LightningElement {
    @api objectApiName;
    @api recordId;
}