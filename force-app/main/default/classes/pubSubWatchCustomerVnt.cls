public with sharing class pubSubWatchCustomerVnt {
    @AuraEnabled(cacheable=true)
   public static list<Customer__c> customerRecords()
   {
   list<Customer__c> lstCustomer = [select id,Name,watch__c from Customer__c];
   System.debug('lstCustomer  '+lstCustomer);
   return lstCustomer;
   }
   @AuraEnabled(cacheable=true)
   public static list<watch__c> watchRecords(string watchRecIdPar)
   {
    list<Customer__c> custLst = [select id,Name,watch__c from Customer__c where id=:watchRecIdPar];

   list<watch__c> lstwatch = [SELECT WatchImg__c, Id, Name, case_material__c, price__c, watch_strap__c FROM watch__c where Id =: custLst[0].watch__c];
   System.debug('lstwatch  '+lstwatch);
   return lstwatch;
   }
}