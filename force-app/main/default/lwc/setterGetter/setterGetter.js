import { LightningElement } from 'lwc';

export default class SetterGetter extends LightningElement {

    inpVar;
    inpName;

    set inpName(value)
    {
        alert(typeof value);
      this.inpVar=value;
    }
    get inpName()
    {
        return this.inpVar;
    }
     changeHandler(event)
     {
     this.inpName=event.target.value;
    }
}