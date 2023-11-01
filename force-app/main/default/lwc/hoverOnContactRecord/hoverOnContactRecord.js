import { LightningElement, wire ,track} from 'lwc';
import methodName from '@salesforce/apex/hoverForContact.methodName';


export default class HoverOnContactRecord extends LightningElement {
   
    @track searchTerm = '';
    @track bears;
    @track ranger;
    @track left;
    @track top;
    @track isShowModal = false;

    @wire(methodName)
    loadBears(result) {
        this.bears = result;
    }
    showData(event){
        this.ranger = event.currentTarget.dataset.rangerid;
        // alert(this.ranger);
        this.left = event.clientX;
        this.top=event.clientY;
    }
    hideData(event){
        this.ranger = "";
    }
    get assignClass()
     { 
        return this.active ? '' : 'slds-hint-parent';
     }

  showModalBox() {  
      this.isShowModal = true;
  }

  hideModalBox() {  
      this.isShowModal = false;
  }
}