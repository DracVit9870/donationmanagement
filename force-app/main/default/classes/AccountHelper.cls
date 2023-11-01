public with sharing class AccountHelper {
//vishal..........
    @AuraEnabled(cacheable=true)
    public static list<contact> getContactRecords(string accId)
    {
       list<contact> lstContact = [select id,accountid,FirstName,LastName,Email,Phone from contact where accountid =: accId];
       return lstContact;
    }
}
