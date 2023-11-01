import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners} from 'c/pubsubFile';
import { CurrentPageReference } from 'lightning/navigation';
import watchRecords from '@salesforce/apex/pubSubWatchCustomerVnt.watchRecords';

export default class PubSubWatchVnt extends LightningElement 
{
    watchRecord;

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
       
        watchRecords({watchRecIdPar : myData}).then(result=>{
            this.watchRecord = result;
           
        })
        .catch(error=>{
            console.log('error occured');
        })
        
    }  
}