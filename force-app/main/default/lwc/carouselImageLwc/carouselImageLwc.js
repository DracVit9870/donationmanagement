import { LightningElement } from 'lwc';
import myResource from '@salesforce/resourceUrl/InsuranceImg2';

import myResource1 from '@salesforce/resourceUrl/InsuranceImg';

import myResource2 from '@salesforce/resourceUrl/insuImage';
import myResource3 from '@salesforce/resourceUrl/insurance13';
import myResource4 from '@salesforce/resourceUrl/insuranceImg23';
export default class CarouselImageLwc extends LightningElement {
    InsuranceImg2=myResource;
    insuImage=myResource2;	
    InsuranceImg=myResource1;
    insurance13=myResource3;
    insuranceImg23=myResource4;

}