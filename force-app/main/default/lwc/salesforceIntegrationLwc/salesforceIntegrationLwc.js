import { LightningElement,track } from 'lwc';
import getAuthorizeMethod from '@salesforce/apex/callout_salesforce_util_cntrl.getAuthorizeMethod';
import { NavigationMixin } from 'lightning/navigation';
 
export default class SalesforceIntegrationLwc extends NavigationMixin(LightningElement) {
 
    @track anon;


 
    authorizeHandler()
    {
        getAuthorizeMethod().then(result => {
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