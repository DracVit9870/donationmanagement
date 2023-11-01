public with sharing class policyRecord 
{
   @AuraEnabled(cacheable=true)
   public static list<Policy_Holder__c> fetchpolicy(string polId)
   {
    System.debug('i got the id '+polId);
   list<Policy_Holder__c> lstPolicy = [SELECT Id, Name, CreatedDate,LastModifiedDate ,DOB__c, Gender__c,
                                       Phone__c, Email__c, Occupation__c, Income_Per_Annum__c,
                                        Address__c, Agent_name__c FROM 
                                        Policy_Holder__c where PH_ID__c=:polId];
   System.debug('lstPolicy '+lstPolicy);
   if(!lstPolicy.isempty())
   {
      return lstPolicy;
   }
  else {
   
   return null;
  }
   }
} 