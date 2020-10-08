import { Component, OnInit, Input } from '@angular/core';

import { SymbolComponent } from './../symbol/symbol.component';
import { BalanceComponent } from "./../balance/balance.component";

import { PosiblePaylines } from '../posiblePaylines';

@Component({
  selector: 'machine-component',
  templateUrl: './machine-component.component.html',
  styleUrls: ['./machine-component.component.css']
})
export class MachineComponentComponent implements OnInit {

  //lamai, portocale, struguri, cirese, pepeni, stele, 7

  infoSide: BalanceComponent = new BalanceComponent();
  posiblePaylines: PosiblePaylines = new PosiblePaylines();

  //income: number = 0;

  matrix = [
    [ new SymbolComponent(), new SymbolComponent(),new SymbolComponent(),new SymbolComponent(),new SymbolComponent()],
    [ new SymbolComponent(), new SymbolComponent(),new SymbolComponent(),new SymbolComponent(),new SymbolComponent()],
    [ new SymbolComponent(), new SymbolComponent(),new SymbolComponent(),new SymbolComponent(),new SymbolComponent()]
  ];

  reel1: SymbolComponent[];
  reel2: SymbolComponent[];
  reel3: SymbolComponent[];
  reel4: SymbolComponent[];
  reel5: SymbolComponent[];

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
    this.infoSide.betMoney();
    this.infoSide.addMoney(this.paylineFunction());
  }

  getSymbolSrc() {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 5; j++) {
        let src = this.matrix[i][j];
        console.log(src);
      }
    }
  }

   payline1(n: number) {
     if(n > 2) {
       return this.infoSide.income;
     }
     if(this.matrix[0][n].id === this.matrix[0][n + 1].id &&
        this.matrix[0][n + 1].id === this.matrix[0][n + 2].id) {
          this.infoSide.income += this.matrix[0][0].currency;  
          console.log(this.infoSide.income);
          return this.payline1(n + 1);
     }
   }

   stockReels() {
      this.reel1 = [this.matrix[0][0],this.matrix[1][0],this.matrix[2][0]];
      this.reel2 = [this.matrix[0][1],this.matrix[1][1],this.matrix[2][1]];
      this.reel3 = [this.matrix[0][2],this.matrix[1][2],this.matrix[2][2]];
      this.reel4 = [this.matrix[0][3],this.matrix[1][3],this.matrix[2][3]];
      this.reel5 = [this.matrix[0][4],this.matrix[1][4],this.matrix[2][4]];
   }

   paylineFunction(): number {
     this.stockReels();
     let linii = 0;
     for (let pos of this.posiblePaylines.posPL) {
      let newPL: SymbolComponent[];
      newPL = [this.reel1[pos[0]],this.reel2[pos[1]],this.reel3[pos[2]],
      this.reel4[pos[3]],this.reel5[pos[4]]];
        if(newPL[0].id === newPL[1].id && newPL[1].id === newPL[2].id) {
          this.infoSide.income += newPL[0].currency;
          linii++;
          console.log(newPL);
          if(newPL[2] === newPL[3]) {
            this.infoSide.income += newPL[0].currency;
            linii++;
            if(newPL[3] === newPL[4]) {
              this.infoSide.income += newPL[0].currency;
              linii++
            }
          }
        }
      }
      console.log(`numarul de linii este: ${linii}`);
     return this.infoSide.income;
   }
}
