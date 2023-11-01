import { LightningElement,wire,track } from 'lwc';
import showAccRec from '@salesforce/apex/fetchAccRec.accRecords';

const coll = [
    { label: 'NAME', fieldName: 'Name'},
    { label: 'INDUSTRY', fieldName: 'Industry'}
];

export default class InputAccRecParent extends LightningElement {

     columns=coll;
     @track inpVal;
    handleCustomEvent(event)
    {
     this.inpVal=event.detail;
    }
    @wire(showAccRec,{searchkey:'$inpVal'}) wireshowAccRec;

}