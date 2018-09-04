import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
 
  // bankName: string;
  // fName: string;
  // lName: string;
  // age: number;
  // address: {};
  // balance: number;
  // currency: number;
  // transactions: any[];
  
  constructor(private _bank: BankService,
              private _activatedRoute: ActivatedRoute,
             private _router: Router) { 
   
    // this.bankName = this._bank.bankName;
    // // this.fName = this._bank.fName;  
    // this.lName = this._bank.lName;
    // this.age = this._bank.age;
    // this.address = this._bank.address;
    // // this.balance = this._bank.balance;
    // this.currency = this._bank.currency;
    // this.transactions = this._bank.transactions;
    // this.withdrawalFunct = this._bank.withdrawalFunct;
  }
 
  //display: string = "Please make a selection >";
  inputValue1 = '';
  button: string = '' ;
  //console.log(this._bank.fName); 
  atmWithdrawal() {
    if(this._bank.atmWithdrawal == false) {
      //this.display = 'Please select amount below ';
      this._bank.atmMessage ='Select amount to widthdrawl below';
      this._bank.atmWithdrawal = true;
      this._bank.atmDeposit = false;
    }
    
  };
 
  atmDeposit() {
    if(this._bank.atmDeposit == false) {
     //this.display = 'Please select amount below ';
     this._bank.atmMessage ='Select amount to deposit below';
     this._bank.atmDeposit = true;
     this._bank.atmWithdrawal = false;
    }
  };
  
  balanceButton() {
    this._bank.atmMessage ='';
    this._router.navigate([`atm`])
  }
  
  transButton() {
    this._bank.atmMessage = ''; 
  };
 
 // withdrawalButton(this.inputValue1: number) {
  //   if(this.display == "Input amount in box>") {
  //     this._bank.withdrawalFunct(this.inputValue1);
  //     this.display = `Withdrawal: ${this.inputValue1}
      
  //     Current Balance: ${this.balance}`;
  //   }
  // };
  
  
  // withdrawlAmout: ;
  // go() {
  //   this.display= "thank you";
  // };
  // displayfunct() {
  //   if( this.display = "Please make a selection >"){
  //   this.display = 'Please enter deposit amount in input box>' 
  // } else if ( this.display = 'Please enter deposit amount in input box>'  {

  // };
  // withd(){ 
  // this.withdrawal(10);
  // }
  
  // makeWithdrawal() {
  
  // }
}