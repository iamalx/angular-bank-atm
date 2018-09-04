import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BankService  {
    // teller component 
    tellerDeposit:boolean =false;     
    tellerWithdrawal: boolean = false; 
    //atm component
    atmWithdrawal: boolean= false;
    atmDeposit: boolean =false;
    atmMessage : string = "Please make a selection >";
    //contact component 
    contactName: string ='';
    contactEmail: string  = '';
    contactMessage: string ='';
    transYear: any = null;
    //main service 
    message: string = '';
    inputValue1: any = "";
    transAmount: number = null;
    transType: string =''
    
      
    bankName = 'Bank of San Diego';
    fName = 'Alex';
    lName ='Reyes';
    
    age = 50;
    address = {
      street: '1234 street st',
      city: 'San Diego',
      state: 'Ca',
      zip: 12345,
      country: 'New Zeland'
    };
    balance: number = 1000;
    currency = 'USD';
    transactions = [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ];
    getDate() {
      return  new Date().getFullYear();
    }
    
    // main withdrawal functiuon - shared w/ other components
    withdrawalFunct(trans: any) {
  
      if(this.balance - trans > 99) { 
         this.transYear = this.getDate()
        this.transType = "widthdrawl"// balance cannot be < $99
        this.showTrans()
        let negTrans = trans* -1;
        this.balance = this.balance + negTrans;
        this.message = 'Widthdrawl successful';
      } else {
        this.message = 'Sorry not enough funds';
        }
      
    };
    // main depost funtc - shared w/ other component
    depositFunct(trans: number) {
      this.transType = 'Deposit';
      this.showTrans()
      let posTrans = -1 * trans; 
      this.balance = (this.balance - posTrans);
      this.message = 'Depostit successful';
   
    };
    
    showBalance() {
      return this.balance;
    };
    
   
    
    showTrans() {
      return this.transactions.push(
        {
        date: this.transYear,
        type: this.transType,
        amount: this.transAmount,
        currency: 'usd'
          
        })
    };
    
// withdrawal(9);
// deposit(10);
// showBalance();
// console.log(showTrans());
 
 
}


