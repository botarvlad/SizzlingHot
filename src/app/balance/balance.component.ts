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

  constructor(){this.balance = 1000; this.bet = 10;}
  
  ngOnInit(): void {
  }

  addMoney(money: number) {
    this.balance += money;
    this.income = 0;
  }

  betMoney() {
    this.balance -= this.bet;
  }

  changeBet(amount: number) {
    this.bet = amount;
  }
}
