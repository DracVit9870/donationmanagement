public without sharing class menuItemsFetch 
{
    @AuraEnabled
    public static list<Menu_item__c> fetchFood(string menuPar)
    {
        string itemPar = '%'+menuPar+'%';
          list<Menu_item__c> listMenuItems = [SELECT Id, Name, Ingredients__c,Price_for_half__c,price_for_full__c, Food_image__c, Contain_egg__c, Spice_level__c,Size__c FROM Menu_item__c where Name like : itemPar];   
    System.debug('listMenuItems  '+listMenuItems);
    
    return listMenuItems;
    }
}