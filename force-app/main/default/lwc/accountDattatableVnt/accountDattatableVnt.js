import { LightningElement,track} from 'lwc';
import {wire} from 'lwc';
import fetchAccounts from '@salesforce/apex/accountDatatableClass.fetchAccounts';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const coll=[{label:'Name',fieldName:'Name'},
{label:'Phone',fieldName:'Phone'},
{label:'Industry',fieldName:'Industry'},
{type:'button-icon',label: 'View',typeAttributes: { iconName: 'standard:visits',name: 'preview' }},
{type:'button-icon',label: 'Edit',typeAttributes: { iconName: 'standard:record_update',name: 'edit' }},
{type:'button-icon',label: 'Delete',typeAttributes: { iconName: 'standard:record_delete',name: 'delete' }}
];
export default class AccountDattatableVnt extends NavigationMixin (LightningElement) 

{
    @track searchName;
    columns=coll;
    @track recordId;
    actionName;
    

    searchHandler(event)
    {
        this.searchName = this.template.querySelector("lightning-input[data-king=nameVar]").value;
    }
@wire(fetchAccounts,{namePar:'$searchName'}) 
gotRecord;

handleRowAction(event) 
{
     this.actionName = event.detail.action.name;
   
     this.recordId = event.detail.row.Id;
    

    if(this.actionName === 'preview')
    {
        
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__recordPage',
        //     attributes: {
        //         recordId:this.recordId,
        //         objectApiName:'Account', 
        //         actionName:'view'
        //     }
        // });
    
        window.open("/" +this.recordId,'_blank');
      

    }
    else if(this.actionName === 'edit')
    {
       
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:this.recordId,
                objectApiName: 'Account',
                actionName: 'edit'
            }
        });
        // window.open("/"+this.recordId+"/e",'_blank');
    
    }

    else if(this.actionName === 'delete')
    {
        deleteRecord(this.recordId)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account Record deleted Successfully',
                    variant: 'success'
                })
            );
            // Navigate to a record home page after
            // the record is deleted, such as to the
            // contact home page
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'home',
                },
            });
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error deleting record',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });

    }  
}

    }
    