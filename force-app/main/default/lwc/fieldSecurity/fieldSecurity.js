import { LightningElement } from 'lwc';
import getfields from '@salesforce/apex/fieldSecurityQuery.getfields';

export default class FieldSecurity extends LightningElement 
{
    fieldss;
    clickHandler()
    {
        getfields().then(result =>{
this.fieldss=result;
alert(JSON.stringify(result));
        }).catch(error =>{
console.log('error cooured.');
        });
    }
}