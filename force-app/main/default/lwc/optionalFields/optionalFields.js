import { LightningElement } from 'lwc';

export default class OptionalFields extends LightningElement
 {
    nm;
    ph;
    em;
    ag;
    xyz=true;
    xyz1=true;


    nameHandler(event)
    {
        this.nm=event.target.value; 
    }
    phoneHandler(event)
    {
        this.ph=event.target.value; 
        if(this.ph){
            this.xyz1=false;
        }
        else{
            this.xyz1=true;
        }
        
    }
    emailHandler(event)
    {
        this.em=event.target.value;
        if(this.em){
            this.xyz=false;
        }
        else{
            this.xyz=true;
        }
    }
    ageHandler(event)
    {
        this.ag=event.target.value;
    }
  
   saveHandler(event)
   {
    alert(this.nm +' '+this.ph +' '+this.em +' '+this.ag);
   }
 }