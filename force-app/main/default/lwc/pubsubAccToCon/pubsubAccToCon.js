import { LightningElement,wire,track  } from 'lwc';
import accRecords from '@salesforce/apex/fetchAccRec.accRecords';
import {  fireEvent } from 'c/pubsubFile';
import { CurrentPageReference } from 'lightning/navigation';
 
const coll = [
  { label: 'NAME', fieldName: 'Name'},
  { label: 'INDUSTRY', fieldName: 'Industry'}
];

export default class PubsubAccToCon extends LightningElement {
 
   @wire(CurrentPageReference) pageRef;

  columns=coll;
  @track inpVal;

    searchHandler(event)
    { 
      this.inpVal=event.target.value;
    }
    @wire(accRecords,{searchkey:'$inpVal'}) wireshowAccRec;

    rowSelectionHandler(event)
    {
        const selectedRowss = event.detail.selectedRows; 
        for(let i=0; i < selectedRowss.length; i++)
        {
          var Accids=selectedRowss[i].Id;
          console.log('parent id is '+Accids);
         
        }
        fireEvent(this.pageRef,'eventName',Accids);

    }
}