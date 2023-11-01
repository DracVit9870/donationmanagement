import { LightningElement } from 'lwc';

export default class DISourceComponent extends LightningElement {
   
    buttonHandler(event)
    {

        alert('Button was called.');

        const selectedEvent = new CustomEvent('itemselectedevt', { detail:{recdId:event.target.label}});

        this.dispatchEvent(selectedEvent);
    }
}