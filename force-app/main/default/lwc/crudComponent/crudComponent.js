import { LightningElement,api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';

export default class CrudComponent extends LightningElement {
    @api recordId;
deleteRecordHandler()
{
    deleteRecord(this.recordId) .then(() => {
        var myCustomEvent=new ShowToastEvent({
        title: 'Success',
        message: 'Record deleted',
        variant: 'success'
    });
        this.dispatchEvent(myCustomEvent);
    //     this.dispatchEvent(
    //         new ShowToastEvent({
    //             title: 'Success',
    //             message: 'Record deleted',
    //             variant: 'success'
    //         })
    //     );
    
    // })
})
}
updateRecordHandler()
{
var recordInput= {

    "fields": {
        "Id" : this.recordId,
        "Name": "Universal Containers",
        "Phone" : "789"
              }
          }
          updateRecord(recordInput).then(() => {
            var myCustomEvent=new ShowToastEvent({
            title: 'Success',
            message: 'Record Updated',
            variant: 'success'
        });
            this.dispatchEvent(myCustomEvent);
       
    })
 }
}