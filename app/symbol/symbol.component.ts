import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const symbols = [
  { id: 0, name: 'banana', src: '../../assets/images/Banana.jpeg', currency: 3},
  { id: 1, name: 'cireasa', src: '../../assets/images/Cireasa.jpeg', currency: 4},
  { id: 2, name: 'pepene', src: '../../assets/images/Pepene.jpeg', currency: 5},
  { id: 3, name: 'portocala', src: '../../assets/images/Portocala.jpeg', currency: 6},
  { id: 4, name: 'strugure', src: '../../assets/images/Strugure.jpeg', currency: 7},
  { id: 5, name: 'septar', src: '../../assets/images/Septar.jpeg', currency: 20}
];

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {

  id = null;
  name = null;
  src = null;
  currency = null;

  constructor() { 
    let rand = Math.floor(Math.random()*6);
    this.id = symbols[rand].id
    this.name = symbols[rand].name;
    this.src = symbols[rand].src;
    this.currency = symbols[rand].currency;
  }
  
  ngOnInit(): void {
  }
}
