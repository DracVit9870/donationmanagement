import { LightningElement,wire } from 'lwc';
import retriveAccount from '@salesforce/apex/fetchAccRec.accRecords';

const columns = [
    { label: 'name', fieldName: 'Name' },
    { label: 'industry', fieldName: 'Industry'}
    
];

export default class GetTenAccRecords extends LightningElement  {

 
    columns = columns;

    inpVal;
    myName(event)
    {
        this.inpVal=event.target.value;
    }
    @wire(retriveAccount,{searchkey:'$inpVal'}) wiredretriveAccount;
  
}