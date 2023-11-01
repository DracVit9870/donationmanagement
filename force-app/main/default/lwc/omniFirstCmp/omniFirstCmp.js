import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';
export default class OmniFirstCmp extends OmniscriptBaseMixin(LightningElement) {

renderedCallback(){

 console.log('This is rendercallback');

}
}

