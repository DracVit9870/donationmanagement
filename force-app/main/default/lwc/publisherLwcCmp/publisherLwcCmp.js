import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import abcd from '@salesforce/messageChannel/abcd__c';

export default class PublisherLwcCmp extends LightningElement {

    @wire(MessageContext)
    messageContext;

    sendPayloadHandler()
    {
        const payload = { recordName: 'Hi this is Swapnil. ',
                          recordData:'Salesforce is my life' };

        publish(this.messageContext, abcd, payload);

    }
}