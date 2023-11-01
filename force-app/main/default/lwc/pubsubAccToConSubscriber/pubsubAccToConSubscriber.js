import { LightningElement,wire} from 'lwc';
import conRecords from '@salesforce/apex/fetchAccRec.conRecords';
import { registerListener, unregisterAllListeners} from 'c/pubsubFile';
import { CurrentPageReference } from 'lightning/navigation';

export default class PubsubAccToConSubscriber extends LightningElement {
    contactRecords;
    @wire(CurrentPageReference) pageRef;
    connectedCallback()
    {
        registerListener('eventName', this.handleMessage, this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    handleMessage(myData)
    {
        if(myData)
        {
            conRecords({accid : myData}).then(result=>{
                this.contactRecords = result;
            })
            .catch(error=>{
                console.log('error occured');
            })
        }
        else
        {
            conRecords({accid : ''}).then(result=>{
                this.contactRecords = result;
            })
            .catch(error=>{
                console.log('error occured');
            })
        }
        
        
    }  

}