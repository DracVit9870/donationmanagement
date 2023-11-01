import { LightningElement } from 'lwc';

export default class TestLwc extends LightningElement {

   showMsg=false;
   changehandler()
   {
      alert('My Name is Darsh');
   }
   clickme()
   {
       this.showMsg=true;
   }
}