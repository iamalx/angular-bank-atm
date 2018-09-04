"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AtmComponent = /** @class */ (function () {
    function AtmComponent(_bank) {
        this._bank = _bank;
        this.display = "Please make a selection >";
        this.inputValue1 = '';
        this.bankName = this._bank.bankName;
        // this.fName = this._bank.fName;  
        this.lName = this._bank.lName;
        this.age = this._bank.age;
        this.address = this._bank.address;
        // this.balance = this._bank.balance;
        this.currency = this._bank.currency;
        this.transactions = this._bank.transactions;
        this.withdrawalFunct = this._bank.withdrawalFunct;
    }
    AtmComponent.prototype.atmWithdrawal = function () {
        if (this.display == "Please make a selection >") {
            this.display = "Input amount in box>";
        }
    };
    ;
    AtmComponent.prototype.withdrawalButton = function (inputValue1) {
        if (this.display == "Input amount in box>") {
            this.withdrawalFunct(this.inputValue1);
            this.display = "Withdrawal: " + this.inputValue1 + "\n      \n      Current Balance: " + this.balance;
        }
    };
    ;
    AtmComponent = __decorate([
        core_1.Component({
            selector: 'app-atm',
            templateUrl: './atm.component.html',
            styleUrls: ['./atm.component.css']
        })
    ], AtmComponent);
    return AtmComponent;
}());
exports.AtmComponent = AtmComponent;
