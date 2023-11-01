import { LightningElement, wire } from 'lwc';
import FORM_FACTOR from "@salesforce/client/formFactor";
import pizza from '@salesforce/resourceUrl/pizza';
import Biryani from '@salesforce/resourceUrl/Biryani';
import coldcoffe from '@salesforce/resourceUrl/coldcoffe';
import burger from '@salesforce/resourceUrl/burger';
import icecream from '@salesforce/resourceUrl/icecream';
import pavbhaji from '@salesforce/resourceUrl/pavbhaji';
import chinese from '@salesforce/resourceUrl/chinese';
import dosa from '@salesforce/resourceUrl/dosa';
 
import searchMenuItems from '@salesforce/apex/fetchMenuItems.searchMenuItems';


export default class ERestaurant extends LightningElement {
    pizzas=pizza;
    Biryanis=Biryani;
    coldcoffes=coldcoffe;
    burgers=burger;
    icecreams=icecream;
    pavbhajis=pavbhaji;
    chineses=chinese;
    dosas=dosa;
    recid;
    searchVar;

    commonHandler(event){
        this.recid=event.currentTarget.dataset.id;
        alert(this.recid);
        console.log('this.recid..'+this.recid);


        searchMenuItems({menuPar:'pizza'}).then(response =>
        {
            alert('response  '+JSON.stringify(response));
        }).catch(error =>{
            alert('error occured.'+JSON.stringify(error));
        });

    }
    handleAccountFieldChange(event)
    {
        this.searchVar=event.target.value;
        alert(this.searchVar);
        console.log('this.recid..'+this.searchVar);
        
        searchMenuItems({menuPar:this.searchVar}).then(response =>
            {
                alert('response  '+response);
            }).catch(error =>{});
    }
}