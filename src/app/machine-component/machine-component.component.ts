import { SymbolComponent } from './../symbol/symbol.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'machine-component',
  templateUrl: './machine-component.component.html',
  styleUrls: ['./machine-component.component.css']
})
export class MachineComponentComponent implements OnInit {

  //lamai, portocale, struguri, cirese, pepeni, stele, 7
  matrix = [
    ['0','0','0','0','0'],
    ['0','0','0','0','0'],
    ['0','0','0','0','0']
  ];

  bet(): void {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 5; j++) {
        let randSrc = new SymbolComponent();
        this.matrix[i][j] = randSrc.getSymbol();
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
