public with sharing class AgentRecCntrl 
{
    @AuraEnabled
    public static List<Account> getAccountData(){
       return [SELECT Id,Name,AccountNumber,Industry,Phone FROM Account limit 7];
    }
    
    @AuraEnabled
    public static void delAccount(Account accountRec){
        delete accountRec;
    } 
 }