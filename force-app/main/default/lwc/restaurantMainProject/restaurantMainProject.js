import { LightningElement,track,api } from 'lwc';
import imgPizza from '@salesforce/resourceUrl/pizzaRestaurant';
import imgBiryani from '@salesforce/resourceUrl/BiryaniRestaurant';
import fetchFood from '@salesforce/apex/menuItemsFetch.fetchFood';


export default class RestaurantMainProject extends LightningElement
{
  @track isShowModal = false;
  biryaniImg = imgBiryani;
  pizzaImg   = imgPizza;
  menuId;
  getMenuFromApex;
  selectedOption;
fullSize;
halfSize;
  showMenuItem=true;

  value = '';

  get options() {
      return [
          { label: 'Full', value: 'option1' },
          { label: 'Half', value: 'option2' },
      ];
      
  }
 
  

  menuHandler(event)
  {
     this.menuId = event.currentTarget.dataset.msg;
    //  alert('Menu item is '+this.menuId);

      fetchFood({menuPar:this.menuId}).then(result =>{
          alert('result  '+JSON.stringify(result));
          this.getMenuFromApex=result;}).catch(error =>{});

      this.showMenuItem=false;
     
  }  
  addHandler(event)
  {
    this.isShowModal = true;
    alert(event.currentTarget.id);
  }
  hideModalBox() 
  {  
    this.isShowModal = false;
  }

  handleRadioChange(event) {
    const selectedOption = event.detail.value;
    //alert('selectedOption ' + selectedOption);
    if (selectedOption == 'option1'){
      this.fullSize=this.getMenuFromApex.price_for_full__c;

       alert('Iam in Full'+this.fullSize);
    }else{
       this.halfSize=this.getMenuFromApex.Price_for_half__c;
      alert('Iam in Half'+this.getMenuFromApex.Price_for_half__c);
    }
  }

}
