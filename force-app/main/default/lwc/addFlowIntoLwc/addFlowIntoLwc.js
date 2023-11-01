import { LightningElement } from 'lwc';

export default class AddFlowIntoLwc extends LightningElement 
{
    FName;
    LName;
    showFlow=false;
    inputVariables=[];
    
    submitHandler(event)
    {
        
this.FName=this.template.querySelector('lightning-input[data-name="firstnm"]').value;
this.LName=this.template.querySelector('lightning-input[data-name="lastnm"]').value;
this.showFlow=true;
this.inputVariables=[
    {
        name: "firstName",
        type: "String",
        value: this.FName
    },
    {
        name: "lastName",
        type: "String",
        value: this.LName
    }
];
    }
    handleAccountStatusChange(event)
{
if(event.detail.status?.toLowerCase()== 'finished')
{
this.firstName=this.FName;
this.lastName=this.LName;
this.showFlow=false;
}
}
}