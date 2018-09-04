import { Component } from '@angular/core';
import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  // bankName: string;
  // fName: string;
  // lName: string;
  // age: number;
  // address: {};
  // balance: number;
  // currency: number;
  // transactions: any[];
  
  
  constructor(private _bank: BankService) { 
   
  // this.bankName = this._bank.bankName;
  // this.fName = this._bank.fName;  
  // this.lName = this._bank.lName;
  // this.age = this._bank.age;
  // this.address = this._bank.address;
  // this.balance = this._bank.balance;
  // this.currency = this._bank.currency;
  // this.transactions = this._bank.transactions;

  //   this.fName:
  //   lName: 'Reyes',
  //   age: 0,
  //   address: {
  //     street: '1234 street st',
  //     city: 'city',
  //     state: 'state',
  //     zip: 12345,
  //     country: 'canada'
  //   },
  //   balance: 0.01,
  //   currency: 'usd',
  //   transactions: [
  //     {
  //       date: '01-01-01',
  //       type: 'withdrawal',
  //       amount: 200.00,
  //       currency: 'usd'
  //     },
  //     {
  //       date: '02-02-02',
  //       type: 'deposit',
  //       amount: 100.00,
  //       currency: 'usd'
  //     },
  //     {
  //       date: '03-03-03',
  //       type: 'withdrawal',
  //       amount: 2.00,
  //       currency: 'usd'
  //     }
  //   ]
  // };
  }

}

