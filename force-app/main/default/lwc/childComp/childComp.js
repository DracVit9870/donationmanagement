import { LightningElement, track, api } from 'lwc';
export default class ChildComponent extends LightningElement
{
        @track Message;
        @api
        changeMessage(strString)
         {

        this.Message = strString.toUpperCase();
         
         }
         @api
         changeMessage1()
         {
            alert('Jenny I cant be yours.');
         }
}