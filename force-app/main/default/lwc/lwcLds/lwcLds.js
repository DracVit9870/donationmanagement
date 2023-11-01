import { LightningElement, track, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getRecord } from 'lightning/uiRecordApi';

const fields=['Account.Name','Account.Phone','Account.Industry'];
export default class LwcLds extends LightningElement {
    @track inpName;
    @track inpPhone;
    @track inpIndustry;
    @track createdrecordId;
    @track showAccount=false;
    @wire (getRecord,{recordId:'$createdrecordId',fields:fields})
    AccountRec;
    NamechangeHandler(event){

        this.inpName=event.target.value;

    }
    PhonechangeHandler(event){

        this.inpPhone=event.target.value;
    }
    IndustrychangeHandler(event){

        this.inpIndustry=event.target.value;
    }
    CreateAccounthandler(event){
        const fields={'Name':this.inpName,'Phone':this.inpPhone,'Industry':this.inpIndustry};
        const recordInput={apiName:'Account',fields};
        createRecord(recordInput).then(Response=>{
            console.log('Record was successfully'+Response.id);
            this.createdrecordId=Response.id;
            this.showAccount=true;
        }).catch(error=>{
            console.log('Error message'+error.body.message)
        });
    }
}