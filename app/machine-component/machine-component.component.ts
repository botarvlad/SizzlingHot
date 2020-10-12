import { GambleWindowComponent } from './../gamble-window/gamble-window.component';
import { InfoSide } from './../infoSide';
import { Component, OnInit, Input, HostListener } from '@angular/core';

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
  gambleButtons: GambleWindowComponent = new GambleWindowComponent();

  @HostListener('window: keydown', ['$event']) spaceEvent(event: any) {
    if(event.keyCode === 32 && this.infoSide.income === 0) {
      this.roll();
    }else if(event.keyCode === 37 && this.infoSide.income !== 0) {
      this.gambleRed();
    }else if(event.keyCode === 39 && this.infoSide.income !== 0) {
      this.gambleBlack();
    }else if(event.keyCode === 13 && this.infoSide.income !== 0) {
      this.takeMoney();
    }
  }

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

  roll() {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 5; j++) {
        this.matrix[i][j] = new SymbolComponent();
      }
    }
    this.infoSide.betMoney();
    this.infoSide.win = this.paylineFunction();
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
     for (let pos of this.posiblePaylines.posPL) {
      let newPL: SymbolComponent[];
      newPL = [this.reel1[pos[0]],this.reel2[pos[1]],this.reel3[pos[2]],
      this.reel4[pos[3]],this.reel5[pos[4]]];
        if(newPL[0].id === newPL[1].id && newPL[1].id === newPL[2].id) {
          this.infoSide.income += (newPL[0].currency * this.infoSide.bet);
          console.log(newPL);
          if(newPL[2] === newPL[3]) {
            this.infoSide.income += (newPL[0].currency * this.infoSide.bet);
            if(newPL[3] === newPL[4]) {
              this.infoSide.income += (newPL[0].currency * this.infoSide.bet);
            }
          }
        }
      }
     return this.infoSide.income;
   }

   gambleRed() {
    let randButton: number = Math.floor(Math.random() * 2) + 1;
    if(this.gambleButtons.redButton === randButton){
      this.infoSide.win *= 2;
    }else{
      this.infoSide.win = 0;
      this.infoSide.addMoney(0);
    }
    this.gambleButtons.gamblingRow.push(randButton === 1 ? 'ROSU' : 'NEGRU');
    console.log(randButton);
  }
  gambleBlack() {
    let randButton: number = Math.floor(Math.random() * 2) + 1;
    if(this.gambleButtons.blackButton === randButton){
      this.infoSide.win *= 2;
    }else{
      this.infoSide.win = 0;
      this.infoSide.addMoney(0);
    }
    this.gambleButtons.gamblingRow.push(randButton === 2 ? 'NEGRU' : 'ROSU');
    console.log(randButton);
   }

   takeMoney() {
       this.infoSide.addMoney(this.infoSide.win);
   }
}
