import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  ngOnInit() {
  }
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

// _bank.contactName ='';
// name ='';

}

alertMessage = '';
value2: any = "";
submitFunct() {
  
  if(this._bank.contactName != '' && this._bank.contactEmail != '' && this._bank.contactMessage != '') {
    this.alertMessage ='';
    this.value2 = null;
    alert(`Message was sent successfully 
    Name: ${this._bank.contactName}
    Email: ${this._bank.contactEmail} `)
    this._bank.contactName ='';
    this._bank.contactEmail ='';
    this._bank.contactMessage =''
  } else{
    this.alertMessage= "PLease fill out all boxes"; 
  }
};

}
