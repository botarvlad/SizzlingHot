import { Component, OnInit } from '@angular/core';

const symbols = [
  { id: 0, name: 'banana', src: '../../assets/images/Banana.jpeg'},
  { id: 1, name: 'cireasa', src: '../../assets/images/Cireasa.jpeg'},
  { id: 2, name: 'pepene', src: '../../assets/images/Pepene.jpeg'},
  { id: 3, name: 'portocala', src: '../../assets/images/Portocala.jpeg'},
  { id: 4, name: 'strugure', src: '../../assets/images/Strugure.jpeg'},
  { id: 5, name: 'septar', src: '../../assets/images/Septar.jpeg'}
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

  constructor() { 
    let rand = Math.floor(Math.random()*6);
    this.id = symbols[rand].id
    this.name = symbols[rand].name;
    this.src = symbols[rand].src;
  }
  
  ngOnInit(): void {
  }
  
  getSymbol() {
    // let randNum = Math.floor(Math.random()*6);
    return this;
  }
}
