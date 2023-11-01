import { LightningElement,api } from 'lwc';


export default class PassDataLwctoVfpage extends LightningElement {
    
    @api books = [];

    origin = 'https://aaa-2d6-dev-ed.lightning.force.com';
   
    
    constructor() {
        super();
    
        this.template.addEventListener('message', function(event) {
            console.log(event);
            if (event.origin !== origin) {
                // Not the expected origin: Reject the message!
                return;
            }
            // Handle the message
            console.log(event.data);
        }, false);
    }
    
    // adding a callback to see if this works
    connectedCallback(){
    
        this.template.addEventListener('message', function(event) {
            console.log(event);
            if (event.origin !== origin) {
                // Not the expected origin: Reject the message!
                return;
            }
            // Handle the message
            console.log(event.data);
        }, false);
    }
    
    sendData(){
        alert('origin....'+origin);
    
        var message = 'testing';
        this.template.querySelector('iframe').contentWindow.postMessage(message, origin);
    
    }
}