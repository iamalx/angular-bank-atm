"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var BankService = /** @class */ (function () {
    function BankService() {
        // teller component 
        this.tellerDeposit = false;
        this.tellerWithdrawal = false;
        //atm component
        this.getWithdrawal = false;
        this.getDeposit = false;
        this.atmMessage = "Please make a selection >";
        //contact component 
        this.contactName = '';
        this.contactEmail = '';
        this.contactMessage = '';
        //main service 
        this.message = '';
        this.inputValue1 = "";
        this.bankName = 'Bank of San Diego';
        this.fName = 'Alex';
        this.lName = 'Reyes';
        this.age = 50;
        this.address = {
            street: '1234 street st',
            city: 'San Diego',
            state: 'Ca',
            zip: 12345,
            country: 'New Zeland'
        };
        this.balance = 1000;
        this.currency = 'USD';
        this.transactions = [
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
    }
    // main withdrawal functiuon - shared w/ other components
    BankService.prototype.withdrawalFunct = function (trans) {
        if (this.balance - trans > 99) { // balance cannot be < $99
            var negTrans = trans * -1;
            this.balance = this.balance + negTrans;
            this.message = 'Widthdrawl successful';
        }
        else {
            this.message = 'Sorry not enough funds';
        }
    };
    ;
    // main depost funtc - shared w/ other component
    BankService.prototype.depositFunct = function (trans) {
        var posTrans = -1 * trans;
        this.balance = (this.balance - posTrans);
        this.message = 'Depostit successful';
    };
    ;
    BankService.prototype.showBalance = function () {
        return this.balance;
    };
    ;
    BankService.prototype.showTrans = function () {
        return this.transactions[0].date;
    };
    ;
    BankService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BankService);
    return BankService;
}());
exports.BankService = BankService;
;
