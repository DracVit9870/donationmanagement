import { LightningElement } from 'lwc';
 
export default class ParentComponent extends LightningElement {
   handleChangeEvent(event){
        this.template.querySelector('c-child-Comp').changeMessage(event.target.value);
 
    /* handleChangeEvent(){
        //this.template.querySelector().changeMessage1();
        console.log(this.template.querySelectorAll("lightning-layout-item"));   }*/
    }
}