import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class SessionSetting extends LightningElement 
{
    // options;

    
    // connectedCallback() {
    //     //Create fake data for the example
    //     this.options = [
    //         {
    //             id: 'option1',
    //             optionValue: 'You can select option 1 to view option 1'
    //         },
    //         {
    //             id: 'option2',
    //             optionValue: 'You can select option 2 to view option 2'
    //         },
    //         {
    //             id: 'option3',
    //             optionValue: 'You can select option 2 to view option 3'
    //         }

    //     ];
    // }

    // //Handle option being clicked
    // handleOptionClick = (event) => {

    //     let optionId = event.target.dataset.itPem;
        
    //     //set sessionStorage and localStorage values
    //     sessionStorage.setItem('id',optionId)
    //     localStorage.setItem('id',optionId);

    //     // Navigate to a specific CustomTab.
    //     this[NavigationMixin.Navigate]({
    //         type: 'comm__namedPage',
    //         attributes: {
    //             name: 'optionDetail__c'
    //         }
    //     });
    // }

    valueHandler(event){
       
    }

}