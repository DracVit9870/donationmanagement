import { api, LightningElement, wire, track } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
import getContactRecords from '@salesforce/apex/AccountHelper.getContactRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickActionComponent extends LightningElement 
{
    infoMessage=false;
    showEditForm = false;
    showContacts = true;
    @track contactRecord;
    @api recordId;
    @track listOfRecords;
    @wire(getContactRecords, {accId : '$recordId'})
    conRecords({data, error}){
        if(data){
            if(data.length !== 0){
                this.listOfRecords = data;
            }else{
                this.infoMessage = true;
            }
        }
        else if(error)
        {
            console.log('error occured '+error);
        }
    }

    handleCancel(event){
        const eventName = event.target.name;
        if(eventName === 'cancelOne'){
            this.dispatchEvent(new CloseActionScreenEvent());
        }
        else if(eventName === 'cancelTwo'){
            this.showEditForm = false;
            this.showContacts = true;
        }
    }
    handleOnEdit(event){
        this.showEditForm = true;
        this.showContacts = false;

        this.contactRecord = this.listOfRecords.find(e => 
            e.Id === event.target.dataset.id
          ); 
    }
    get headerOfEditForm(){
        return 'Edit '+this.contactRecord.Name;
    }

    handleSubmit(event){
        event.preventDefault();
        let fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(){
        const toastEvent = new ShowToastEvent({
            title: 'Successfully',
            message: 'Contact Record updated.',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(toastEvent);
    }
}