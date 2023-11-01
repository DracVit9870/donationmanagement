import { LightningElement,track } from 'lwc';
import calloutanimalsPost from '@salesforce/apex/callouthHerokuappCntrl.calloutanimalsPost';

export default class CalloutHerokuuPost extends LightningElement {

    @track animalVar;

    submitNameHandler(event)
    {

      var animalNameVar=  this.template.querySelector('lightning-input[data-animal="aaa"]').value;
        alert(animalNameVar);
        calloutanimalsPost({animalNameee:animalNameVar}).then(result => {
            this.animalVar=result;
            alert(result);
        }).catch(error => {});
    }
}