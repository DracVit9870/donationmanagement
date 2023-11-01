import { LightningElement,track } from 'lwc';

export default class InputAccRecChild extends LightningElement {

    @track searchName;
    searchHandler(event)
    {
       this.searchName=event.target.value;
        const selectEvent = new CustomEvent('mycustomevent', {
            detail: this.searchName
        });
       this.dispatchEvent(selectEvent);
    }
    }