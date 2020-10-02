import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {

  symbols = [
    { id: 0, name: 'banana', src: '../../assets/images/Banana.jpeg'},
    { id: 1, name: 'lamaie', src: '../../assets/images/Cireasa.jpeg'},
    { id: 2, name: 'banana', src: '../../assets/images/Pepene.jpeg'},
    { id: 3, name: 'banana', src: '../../assets/images/Portocala.jpeg'},
    { id: 4, name: 'banana', src: '../../assets/images/Strugure.jpeg'},
    { id: 5, name: 'banana', src: '../../assets/images/Septar.jpeg'}
  ];

  getSymbol() {
    let randNum = Math.floor(Math.random()*6);
    return this.symbols[randNum].src;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
