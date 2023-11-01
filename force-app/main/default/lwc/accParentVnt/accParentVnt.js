import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class AccParentVnt extends LightningElement 
{
accIdFromChld;
 
    nameVar;
    stageVar;
    amountVar;
    dateVar;
    nameHandler(event){this.nameVar=event.target.value;}
    stageNameHandler(event){ this.stageVar=event.target.value;}
    amountHandler(event){this.amountVar=event.target.value;}
    closeDateHandler(event){this.dateVar=event.target.value;}

    displaychld(event)
    {
        this.accIdFromChld =  event.detail
        alert( 'i got id from child'+this.accIdFromChld);
    }
    createHandler(event)
    {
if(this.accIdFromChld != null)
{
    var fields = { 'Name':this.nameVar,'StageName' : this.stageVar,'CloseDate' :this.dateVar,'Amount' :this.amountVar,'AccountId':this.accIdFromChld};
    alert('fields  '+JSON.stringify(fields));
}

       
        const recordInput = { apiName: 'Opportunity', fields };
        alert('recordInput  '+JSON.stringify(recordInput));

        createRecord(recordInput).then(response=>{
            alert('Record created successfully');
        }).catch(error=>{
            alert('Please try again,Record does not created.');
        });
    }

}