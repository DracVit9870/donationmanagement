import { LightningElement, track } from 'lwc';
import calloutanimals from '@salesforce/apex/callouthHerokuappCntrl.calloutanimals';

export default class CalloutHerokuapp extends LightningElement {
    @track animalVar;

    calloutHandler()
    {
        calloutanimals().then(result => {
            this.animalVar=result;
            alert(result);
        }).catch(error => {});
    }
    }