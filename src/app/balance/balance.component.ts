import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: number = 1000;
  bet: number = 10;

  constructor(){}
  
  ngOnInit(): void {
  }

  betMoney() {
    this.balance -= this.bet;
  }

  changeBet(amount: number) {
    this.bet = amount;
  }
}
