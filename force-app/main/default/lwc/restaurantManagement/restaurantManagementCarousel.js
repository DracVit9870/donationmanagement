import { LightningElement } from 'lwc';
import my_Resource1 from '@salesforce/resourceUrl/discountForRestaurant';
import my_Resource2 from '@salesforce/resourceUrl/discountForRestaurant2';
import my_Resource3 from '@salesforce/resourceUrl/discountForRestaurant3';

export default class RestaurantManagement extends LightningElement {
    discountImg1=my_Resource1;
    discountImg2=my_Resource2;
    discountImg3=my_Resource3;
}