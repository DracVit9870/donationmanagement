import { LightningElement,track } from 'lwc';

export default class NwsParentChildCmp extends LightningElement {
    stdName;
    stdAge;
    @track nameVar;
   @track students=[
                 {'Name':'swapnil','Age':22},
                 {'Name':'vishal','Age':23},
                 {'Name':'monish','Age':24}

   ];
   addStudentHandler(event)
   {
    this.stdName=this.template.querySelector("lightning-input[data-recid=Sun]").value;
    this.stdAge=this.template.querySelector("lightning-input[data-recid=Mon]").value;
    // alert(this.template.querySelector("lightning-input[data-recid=Sun]").value);
    // alert(this.template.querySelector("lightning-input[data-recid=Mon]").value);

    alert(this.students.push({'Name':this.stdName,'Age':this.stdAge}));
    this.template.querySelector("lightning-input[data-recid=Sun]").value='';
    this.template.querySelector("lightning-input[data-recid=Mon]").value='';
}
   
}