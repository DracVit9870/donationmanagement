import { LightningElement ,track} from 'lwc';

export default class AdmiFourButtons extends LightningElement {
   @track MainButtonShow=true;

   @track PolicythreeButtonShow=false;
   @track PolicycreateRecShow=false;
   @track PolicyDatatableShow=false;

   @track AgentthreeButtonShow=false;
   @track AgentcreateRecShow=false;
   @track AgentDatatableShow=false;

   @track InsurancethreeButtonShow=false;
   @track InsurancecreateRecShow=false;
   @track InsuranceDatatableShow=false;

   @track MotorthreeButtonShow=false;
   @track MotorcreateRecShow=false;
   @track MotorDatatableShow=false;

  
   
   PolicyHandler(event)         {this.PolicythreeButtonShow=true;this.MainButtonShow=false;}
   AgentHandler(event)          {this.AgentthreeButtonShow=true;this.MainButtonShow=false;}
   LifeInsuranceHandler(event)  {this.InsurancethreeButtonShow=true;this.MainButtonShow=false;}
   MotorInsuranceHandler(event) {this.MotorthreeButtonShow=true;this.MainButtonShow=false;}


   //POLICY HOLDER
   PolicyCancelHandler(event)
   {
    this.PolicythreeButtonShow=false;
    this.MainButtonShow=true;
   }
   PolicyCreateRecordHandler(event)
   {
    this.PolicycreateRecShow=true;
   }
   PolicyViewRecordHandler(event)
   {
      this.PolicyDatatableShow=true;
      
   }

   //AGENT
   AgentCancelHandler(event)
   {
    this.AgentthreeButtonShow=false;
    this.MainButtonShow=true;
   }
   AgentCreateRecordHandler(event)
   {
    this.AgentcreateRecShow=true;
   }
   AgentViewRecordHandler(event)
   {
      this.AgentDatatableShow=true;
   }



//INSURANCE MANAGEMENT
InsuranceCancelHandler(event)
{
 this.InsurancethreeButtonShow=false;
 this.MainButtonShow=true;
}
InsuranceCreateRecordHandler(event)
{
 this.InsurancecreateRecShow=true;
}
InsuranceViewRecordHandler(event)
{
   this.InsuranceDatatableShow=true;
}





//MOTOR MANAGEMENT
MotorCancelHandler(event)
{
 this.MotorthreeButtonShow=false;
 this.MainButtonShow=true;
}
MotorCreateRecordHandler(event)
{
 this.MotorcreateRecShow=true;
}
MotorViewRecordHandler(event)
{
   this.MotorDatatableShow=true;
}
 
}