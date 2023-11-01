import { LightningElement } from 'lwc';
import restaurantHearder from '@salesforce/resourceUrl/header_restaurant';

export default class ERestaurantHeader extends LightningElement 
{
restaurant = restaurantHearder;
}