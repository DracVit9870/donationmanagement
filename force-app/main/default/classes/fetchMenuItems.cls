global with sharing class fetchMenuItems {
   @AuraEnabled
   global static list<Menu_Item__c> searchMenuItems(string menuPar)
   {
    System.debug('Got theID in class  '+menuPar);
    string menuParLike;
    if (menuPar != null && menuPar !='') 
    {
         menuParLike = '%'+menuPar+'%';
    }
   list<Menu_Item__c> lstMenus =[SELECT Id, Name, Food_image__c, Size__c FROM Menu_item__c where Name like :menuParLike];
 System.debug(' list of menu items  '+lstMenus);
   return lstMenus;
   }
}




















