import { LightningElement,wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {  fireEvent } from 'c/pubsubFile';

import customerRecords from '@salesforce/apex/pubSubWatchCustomerVnt.customerRecords';
const coll=[
{ label: 'Name',
fieldName:'Name',
    type: 'url',
    typeAttributes: { label: { fieldName: 'Name' }, target: '_blank'},
    sortable: true
}];
export default class PubSubCustomerVnt extends LightningElement 
{
columns=coll;
iiid;

@wire(CurrentPageReference) pageRef;

@wire(customerRecords) custRec; 

handlee(event)
{
    

 this.iiid =event.currentTarget.dataset.id;

fireEvent(this.pageRef,'eventName', this.iiid);
}

}