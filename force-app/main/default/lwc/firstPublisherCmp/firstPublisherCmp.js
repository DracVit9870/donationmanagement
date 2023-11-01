import { LightningElement,wire } from 'lwc';
import {  fireEvent } from 'c/pubsubFile';
import { CurrentPageReference } from 'lightning/navigation';

export default class FirstPublisherCmp extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    handleChange(event)
    {
        var impVal=event.target.value;
        fireEvent(this.pageRef,'eventName',impVal);
    }
}