import { LightningElement } from "lwc";

export default class SendToVF extends LightningElement {
//   vfRoot = "https://enterprise-nosoftware-7728-dev-ed--c.visualforce.com/";
  message = "";
  handleOnChange(event) {
    this.message = event.target.value;
  }
  handleClick() {
    var vfWindow = this.template.querySelector("iframe").contentWindow;
    vfWindow.postMessage(this.message);
  }
}