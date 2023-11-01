import { LightningElement } from 'lwc';

export default class LifeCycleHooksCmp extends LightningElement
{
    count =0;
constructor()
{
    super()
console.log('this is constructor');
}
enterHandler(event)
{
    console.log('Inbetween Constructor and ConnectedCallback'+event.target.value);
}
connectedCallback()
{
    console.log('this is connectedCallback');

}
renderedCallback()
{
    this.count++;
    console.log('this is renderedCallback number of times '+this.count);

}
disconnectedCallback()
{
    console.log('this is disconnectedCallback');

}

}