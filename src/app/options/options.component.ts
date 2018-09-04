import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private _bank: BankService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
  }

  optionsTrans(amount: number) {
    this._bank.transAmount = amount
    if(this._bank.atmWithdrawal === true){
      this._bank.withdrawalFunct(amount);
      
      this._bank.atmMessage = `${this._bank.message}
  
      Widthdrawl: $${amount}`;
      this._bank.atmWithdrawal = false;
    } else if (this._bank.atmDeposit == true ) {
      this._bank.depositFunct(amount)
      this._bank.atmDeposit = false;
      this._bank.atmMessage = `Deposit successful 
  
      Deposit: $${amount}`;
    
   } 
    this._router.navigate([`/atm`]);
    
};
  
}
