import { LightningElement ,track} from 'lwc';  
import fetchAccounts from '@salesforce/apex/InsuranceLWCExampleController.fetchAccounts'; 
import deletepolicyHolder from '@salesforce/apex/InsuranceLWCExampleController.deletepolicyHolder';  
import { NavigationMixin } from 'lightning/navigation'; 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import NAME_FIELD from '@salesforce/schema/Policy_Holder__c.name'; 
  
const COLUMNS = [   
    { label: 'Insurance Id', fieldName: 'Id' },  
    { label: 'Name', fieldName: 'Name' },    
    { label: 'Policy Holder', fieldName: 'Policy_Holder__c' },
    { label: 'Agent Name', fieldName: 'Agent_ID__c' },
    { label: 'Premium type', fieldName: 'Premium_Type__c' },
    { label: 'Premium amount', fieldName: 'Premium_Amount__c' },
   
     
    { type: "button", typeAttributes: {  
        label: 'Edit',
        variant:"Success",  
        name: 'Edit',  
        title: 'Edit',  
        disabled: false,  
        value: 'edit',  
        iconPosition: 'left'  
    } } ,
    { type: "button", typeAttributes: {  
        label: 'Delete',
        variant:"destructive-text",
        name: 'Delete',  
        title: 'Delete',  
        disabled: false,  
        value: 'Delete',  
        iconPosition: 'left'  
    } }, 
];

export default class HtmlTabLifeInsurance extends LightningElement {

 @track recId;
    accounts;  
    error;  
    columns = COLUMNS; 
    //nameField = NAME_FIELD;
    //recordId='0035i00000MfFG8AAN';
   // objectApiName='Policy_Holder__c';
    
    @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    } 
  
    handleKeyChange( event ) {  
          
        const searchKey = event.target.value;  
  
        if ( searchKey ) {  
  
            fetchAccounts( { searchKey } )    
            .then(result => {  
  
                this.accounts = result;  
  
            })  
            .catch(error => {  
  
                this.error = error;  
  
            });  
  
        } else  
        this.accounts = undefined;  
  
    }      
      
    callRowAction( event ) {  
          
        this.recId =  event.detail.row.Id; 
        const actionName = event.detail.action.name;  
        if ( actionName === 'Edit' ) {  
            console.log('record id is '+this.recId);
            //alert('recId...'+recId);
            this.showpopforPOlicyHolder=true;
            this.isShowModal = true; 
  
        } else if ( actionName === 'Delete') {  
            alert('record id is '+this.recId);
            deletepolicyHolder( { deleteid: this.recId } ).then(
                result =>{
                    this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record deleted',
                        variant: 'success'
                    })
                );
                }
            ).catch(error=>{
                console.log(error);
            });  
          
           
        }          
  
    }  
  
}