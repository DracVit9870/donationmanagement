import { LightningElement, api, track } from 'lwc';
import methodName2 from '@salesforce/apex/hoverForContact.methodName2';

export default class HoverPopUp extends LightningElement {

    @track ranger;
    @track top = 50;
    @track left = 50;
    @track contacts;
    @api
    get myranger(){
        return this.ranger;
    }

    set myranger(value) {

        this.ranger = value;
        

        methodName2({ accId:this.ranger})
        .then(result => {
            this.contacts = result;
            // alert(' this.contacts'+ JSON.stringify(this.contacts));
        })
        .catch(error => {
            this.error = error;
        });
        
    }

    // @api
    // get topmargin(){
    //     return this.top;
    // }

    // set topmargin(value) {
    //     this.top = value;
    // }

    // @api
    // get leftmargin(){
    //     return this.left;
    // }

    // set leftmargin(value) {
    //     this.left = value;
    // }

    // get boxClass() { 
    //     return 'background-color:white; top:${this.top - 280}px; left:${this.left}px';
    //   }
}