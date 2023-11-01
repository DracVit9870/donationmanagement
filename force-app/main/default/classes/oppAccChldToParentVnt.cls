public with sharing class oppAccChldToParentVnt {
    @Auraenabled(cacheable=true)
   public static list<account> methodName()
   {
    list<account> lstAcc = [select id,name from account limit 10];
    system.debug('lstAcc  '+lstAcc);
    return lstAcc;
   }
}