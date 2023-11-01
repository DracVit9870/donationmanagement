import { LightningElement,track,wire} from 'lwc';

import { registerListener, unregisterAllListeners} from 'c/pubsubFile';
import { CurrentPageReference } from 'lightning/navigation';

export default class firstSubscriberCmp extends LightningElement{

    @track Message;
    @wire(CurrentPageReference) pageRef;
    connectedCallback()
    {
        registerListener('eventName', this.handleMessage, this);
    }
    
    handleMessage(myData)
    {
        this.Message = myData;
        //Add your code here
    }   
    disconnectCallback() 
    {
        unregisterAllListeners(this);
    }
}