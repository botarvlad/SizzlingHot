import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: number;
  bet: number;
  income: number = 0;
  win: number = 0;
  //balance = this.data.getBalance();

  constructor(){this.balance = 30; this.bet = 1;}
  // constructor(private data: DataService){this.balance = 10; this.bet = 1;}
  
  ngOnInit(): void {
    //this.data.setBalance
  }

  addMoney(money: number) {
    this.balance += money;
    this.income = 0;
    this.win = 0;
    //this.data.setBalance
  }

  betMoney() {
    this.balance -= this.bet;
  }

  changeBet(amount: number) {
    this.bet = amount;
  }
}
