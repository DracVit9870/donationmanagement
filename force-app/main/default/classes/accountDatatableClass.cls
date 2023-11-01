public with sharing class accountDatatableClass 
{
    @Auraenabled(cacheable=true)
    public static list<account> fetchAccounts(string namePar)
    {
        string parStr = '%'+namePar+'%';
      list<account> lstAccount = [select id,name,phone,industry from account where name like : parStr limit 10];
      System.debug('lstAccount '+lstAccount);
      return lstAccount;
    }
    
}