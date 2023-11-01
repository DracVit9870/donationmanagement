import { LightningElement,track } from 'lwc';
import loginMethod from '@salesforce/apex/loginPage.loginMethod';
import support from '@salesforce/resourceUrl/support';

export default class Insurance extends LightningElement 
{
    support=support;
    UsertypeValue;
    UserValue;
    PasswordValue;
    @track marqueShow=true;
    @track TabsetShow=false;
    @track isShowModal = false;
    @track LoginFirstButtonShow=true;
    @track LogoutButtonShow=false;
    @track createPolicyRecordButton=true;
    @track createPolicyRecord=false;
    @track fourButtonShow=false;
    @track HomeShow=false;
    @track AdminShow=false;
    @track PolicyHolderShow=false;
    @track AgentShow=false;
    @track PaymentShow=false;
    @track bottomshow=true;
    @track FirstHomehederBodyshow=true;

    
    value = 'None';


    get options() {
        return [
            { label: 'None', value: 'none' },
            { label: 'Admin', value: 'admin' },
            { label: 'Policy Holder', value: 'policy holder' },
            { label: 'Agent', value: 'agent' },
        ];
    }

    handleChange(event){this.UsertypeValue = event.target.value;}
    handleEmailChange(event){this.UserValue = event.target.value;} 
    handleMobileChange(event){this.PasswordValue = event.target.value;} 

    LoginFirstButton(){this.isShowModal = true;this.bottomshow=false;FirstHomehederBodyshow=false;this.LogoutButtonShow=false; this.createPolicyRecord=false;this.createPolicyRecordButton=false;}
    LogoutButton(){this.TabsetShow=false;this.LoginFirstButtonShow=true; this.FirstHomehederBodyshow=true;this.LogoutButtonShow=false;this.createPolicyRecordButton=true;}
    cancelButtonHandler() {this.isShowModal = false;this.bottomshow=true;FirstHomehederBodyshow=true;this.LogoutButtonShow=false;}

    createPolicyRecordHandler()
    {
        this.createPolicyRecord=true;
        this.marqueShow=false;
        this.TabsetShow=false;
        this.isShowModal = false;
        this.LoginFirstButtonShow=false;
        this.LogoutButtonShow=false;
        this.HomeShow=false;
        this.bottomshow=false;
        this.FirstHomehederBodyshow=false;
        
    }

    LoginHandler() {

        loginMethod({ usertypeCL: this.UsertypeValue , usernameCL: this.UserValue, passwordCL: this.PasswordValue})
            .then((result) => {
                if(result=='Policy Holder Success')
                {
                    this.FirstHomehederBodyshow=false;
                    this.marqueShow =false;
                    this.TabsetShow=true;
                    
                    this.PaymentShow=true;
                    this.PolicyHolderShow=true;
                    this.isShowModal =false;
                    this.LoginFirstButtonShow=false;
                    this.LogoutButtonShow=true;
                    this.createPolicyRecordButton=false;

                }
                else if(result=='Admin Success')
                {
                    this.FirstHomehederBodyshow=false;
                    this.marqueShow =false;
                    this.TabsetShow=true;
                    this.PaymentShow=false;
                  
                    this.AdminShow=true;
                    this.PolicyHolderShow=true;
                    this.AgentShow=true;
                    this.isShowModal =false;
                    this.LoginFirstButtonShow=false;
                    this.fourButtonShow=true;
                    this.LogoutButtonShow=true;
                    this.createPolicyRecordButton=false;
                }
                else if(result=='Agent Success')
                {
                    this.FirstHomehederBodyshow=false;
                    this.marqueShow =false;
                    this.TabsetShow=true;
                    
                    this.AgentShow=true;
                    this.isShowModal =false;
                    this.LoginFirstButtonShow=false;
                    this.LogoutButtonShow=true;
                    this.createPolicyRecordButton=false;
                }
                
                else{
                    alert('Please enter valid username and password.');
                }
            })
            .catch((error) => {
                
            });

    }

    
}