import { LightningElement, wire, track } from 'lwc';
import retrieveAgents from '@salesforce/apex/AgentRecCntrl.retrieveAgents';
import removePermSet from '@salesforce/apex/AgentRecCntrl.removePermSet';

const columns = [
{ label: 'Name', fieldName: 'Name' },
{ label: 'DOB', fieldName: 'DOB__c' },
{ label: 'Phone', fieldName: 'Phone__c'},
{ label: 'Email', fieldName: 'Email__c' },
{ label: 'Reg. Date', fieldName: 'Reg_Date__c' }
];

export default class AgentViewForm extends LightningElement {

    @track Accids;
    @track data;
    @track error;
    @track columns = columns;
    @track searchString;
    @track initialRecords;
    @wire(retrieveAgents)
    wiredAccount({ error, data }) {
    if (data) {
    console.log(data);
    this.data = data;
    this.initialRecords = data;
    this.error = undefined;
    } else if (error) {
    this.error = error;
    this.data = undefined;
    }
    }
    handleSearch(event) {
    const searchKey = event.target.value.toLowerCase();
    if (searchKey) {
    this.data = this.initialRecords;
    if (this.data) {
    let searchRecords = [];
    for (let record of this.data) {
    let valuesArray = Object.values(record);
    for (let val of valuesArray) {
    console.log('val is ' + val);
    let strVal = String(val);
    if (strVal) {
    if (strVal.toLowerCase().includes(searchKey)) {
    searchRecords.push(record);
    break;
    }
    }
    }
    }
    console.log('Matched Accounts are ' + 
    JSON.stringify(searchRecords));
    this.data = searchRecords;
    }
    } else {
    this.data = this.initialRecords;
    }
    }
    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++) {
            alert('You selected: ' + selectedRows[i]);
        }

        removePermSet({lwcRowId:selectedRows}).then(result =>{
            alert(result);
        }).catch(error =>{
            alert(error);
        });
    }

    }