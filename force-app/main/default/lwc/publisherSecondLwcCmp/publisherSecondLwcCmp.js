import { LightningElement, track ,wire} from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import abcd2 from '@salesforce/messageChannel/abcdForAura__c';

export default class PublisherSecondLwcCmp extends LightningElement
 {
 //inpVal;
@track messageArrayVar =[];

@wire(MessageContext)
messageContext;

    sendMsgHandler()
    {
         
      var inpVal=this.template.querySelector('lightning-input[data-king="sunnn"]').value;

     var currentMsgVar={id:inpVal.length,
                        msg: inpVal,
                        messageSource:'lwc'};
     this.messageArrayVar.push(currentMsgVar);
    //  this.inpVal='';
    //   alert('hi '+JSON.stringify(this.messageArrayVar));

    const payload = { currentmessageee: this.messageArrayVar};
    //alert(JSON.stringify(payload));

      publish(this.messageContext, abcd2, payload);
        
    }
}