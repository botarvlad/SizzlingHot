import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';

import { SymbolComponent } from './../symbol/symbol.component';
import { BalanceComponent } from "./../balance/balance.component";
import { Input } from '@angular/core';

@Component({
  selector: 'machine-component',
  templateUrl: './machine-component.component.html',
  styleUrls: ['./machine-component.component.css']
})
export class MachineComponentComponent implements OnInit {

  //lamai, portocale, struguri, cirese, pepeni, stele, 7

  infoStr: BalanceComponent = new BalanceComponent;

  matrix = [
    [ new SymbolComponent(), new SymbolComponent(),new SymbolComponent(),new SymbolComponent(),new SymbolComponent()],
    [ new SymbolComponent(), new SymbolComponent(),new SymbolComponent(),new SymbolComponent(),new SymbolComponent()],
    [ new SymbolComponent(), new SymbolComponent(),new SymbolComponent(),new SymbolComponent(),new SymbolComponent()]
  ];

  constructor() {}

  ngOnInit(): void {
  }

  roll(): void {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 5; j++) {
        //let randSymbol = new SymbolComponent();
        this.matrix[i][j] = new SymbolComponent();
      }
    }
    this.payline()
    this.infoStr.betMoney();
    //for test
    this.cepulameanumerge();
  }

  getSymbolSrc() {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 5; j++) {
        let src = this.matrix[i][j];
        console.log(src);
      }
    }
  }

  //for test
  cepulameanumerge() {
    console.log(this.matrix[0][0], this.matrix[0][1], this.matrix[0][2]);
  }

   payline() {
     if(this.matrix[0][0].id === this.matrix[0][1].id && this.matrix[0][1].id === this.matrix[0][2].id) {
      console.log('Ai castigat cupa cu cacat !!!!');
     } else if(this.matrix[1][0].id === this.matrix[1][1].id === this.matrix[1][2].id) {
      console.log('Ai castigat cupa cu cacat !!!!');
     } else if(this.matrix[2][0].id === this.matrix[2][1].id === this.matrix[2][1].id) {
      console.log('Ai castigat cupa cu cacat !!!!');
     } else {
       console.log("Sugi pula :3");
     }
   }
}
