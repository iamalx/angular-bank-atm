import { Component, OnInit} from '@angular/core';
import { BankService } from '../bank.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit  {
user: any = {}
 
 
 // bankName: string;
 //  fName: string;
 //  lName: string;
 //  age: number;
 //  adsress: {}; 
 //  balance: number;
 //  currency: number;
 //  transactions: any[];

 constructor(private _bank: BankService,
             private _activatedRoute: ActivatedRoute,
             private _router: Router) { 
   
  //  this.bankName = this.bank$.bankName;
  // this.fName = this.bank$.fName;  
  // this.lName = this.bank$.lName;
  // this.age = this.bank$.age;
  // this.address = this.bank$.address;
  // this.balance = this.bank$.balance;
  // this.currency = this.bank$.currency;
  // this.transactions = this.bank$.transactions;
  // this.withdrawalFunct = this.bank$.withdrawalFunct;
  // this.depositFunct = this.bank$.depositFunct;
  // this.showBalance = this.bank$.showBalance;
  // this.showTrans = this.bank$.showTrans;
 }

ngOnInit() {
 }
 
 tellerMessage: string = '';
 inputValue:string= 'Please select an option';  //default in inpu
 value1: any = '';                              //input value
 display: string ='';
 isDisabled: boolean = true;                    //enable input

//called when withdrawal button is called 
 atmWithdrawal(){
  this.display = "Input withdrawl amount in box >";
  this.isDisabled = false;
  this.inputValue = "Input amount"
  // this.router.navigate([`/teller`]);
  this.value1 = '';
  this._bank.inputValue1 = '';
  this._bank.atmWithdrawal = true;
 };
 //called when deposit button is called 
 atmDeposit(){
 this._router.navigate([`/teller`]);
  //this.router.navigate(['teller']);
  this.display = "Input deposit amount in input box >"
  this.isDisabled = false;
  this.inputValue = "Input amount" 
  this.value1 = '';
  this._bank.inputValue1 = '';
  this._bank.atmDeposit = true;
  
 };
//after depoit or withd button is pressed transAmount() can be called and inputs the input value as an argument of main trans service
 transAmount() {
  if (this._bank.inputValue1 != '') {
   if( this._bank.atmWithdrawal == true) {
    this._bank.transAmount  = this._bank.inputValue1
    this._bank.withdrawalFunct(this._bank.inputValue1);
    this.display = `${this._bank.message}
    Withdrawal: $${this._bank.inputValue1}
    
    Current Balance: ${this._bank.balance} `;
    this.inputValue= '';
    this._bank.atmWithdrawal = false;

  } else if( this._bank.atmDeposit == true) {
    this._bank.depositFunct(this._bank.inputValue1);
   
    this.display = `${this._bank.message}
    Deposit: $${this._bank.inputValue1}
    Current Balance: ${this._bank.balance}`;
    this._bank.atmDeposit = false;
  }
   this.value1 = null; 
   this.isDisabled = true;
   this.inputValue = 'Please select an option';
   this.tellerMessage = "";

  } else {
   this.tellerMessage = "Please input amount";
   }
  
 };
//shows transactions(history) component as a child of teller in router 
showTrans2() {
  this._router.navigate([`teller/history`]);
  this.isDisabled = true;
  this.tellerMessage = "";
  this.value1 = '';
  
};

}
