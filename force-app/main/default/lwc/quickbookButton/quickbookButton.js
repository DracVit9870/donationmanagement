import { LightningElement,track } from 'lwc';
import getAuthMethod from '@salesforce/apex/quickbook_to_salesforce_cntrl.getAuthMethod';
import { NavigationMixin } from 'lightning/navigation';
 
export default class QuickbookButton extends NavigationMixin(LightningElement)  {
    @track anon;


 
    buttonHandler()
    {
        getAuthMethod().then(result => {
                this.anon = result;
                alert(result);
                 
                    // Navigate to the Account home page
                    this[NavigationMixin.Navigate]({
                        type: 'standard__webPage',
                        attributes: {
                            
                            url : this.anon
                        },
                    });
            })
            .catch(error => {
                this.error = error;
            });
    }
}