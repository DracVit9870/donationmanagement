import { LightningElement, wire } from 'lwc';
import methodName from '@salesforce/apex/oppAccChldToParentVnt.methodName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const coll = [{label : 'Name',fieldName : 'Name'}];
export default class OppChildVnt extends LightningElement 
{
    idChld;
    columns=coll;
@wire(methodName) accRecc;

getSelectedName(event) {
    const selectedRows = event.detail.selectedRows;
    // Display that fieldName of the selected rows
     for (let i = 0; i < selectedRows.length; i++)
      {
         alert('You selected: ' + selectedRows[i].Id);
         this.idChld=selectedRows;

         if(this.idChld.length == 1)
{
    this.dispatchEvent(new CustomEvent('hiparent',{detail:selectedRows[i].Id}));
}
else if(this.idChld.length >= 2)
{
   
       const event = new ShowToastEvent({
           title: 'Error',
           message: 'Only one row can be selected',
           variant: 'warning',
           mode: 'pester'
       });
       this.dispatchEvent(event);
  
}
     }
alert('selectedRows.length '+selectedRows.length);


    

}

}