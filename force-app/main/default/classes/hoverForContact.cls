public with sharing class hoverForContact {
    @AuraEnabled(cacheable=true)
   public static list<contact> methodName()
   {
    list<contact> lstContact =[select id,firstname,lastname,phone,email,account.name from contact where email !=null];
    System.debug('lstContact'+lstContact);
 
    return lstContact;
}
@AuraEnabled
public static list<contact> methodName2(string accId)
{
 list<contact> lstSendCOn =[select lastname,email,accountid from contact where accountid =:accId];
 System.debug('lstSendCOn'+lstSendCOn);

 return lstSendCOn;
}

}