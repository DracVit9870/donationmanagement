import { LightningElement,wire } from 'lwc';
import getRecTypeId from '@salesforce/apex/getRecordTypeId.getRecTypeId'
export default class LdsCaseRecordType extends LightningElement {
    @wire(getRecTypeId)ProductRecordTypeId;
    
}