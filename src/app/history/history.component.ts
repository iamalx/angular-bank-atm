import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private _bank: BankService) { }

  ngOnInit() {
  }
display: string ='';
}
