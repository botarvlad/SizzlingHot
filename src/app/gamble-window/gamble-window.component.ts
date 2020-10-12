import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamble-window',
  templateUrl: './gamble-window.component.html',
  styleUrls: ['./gamble-window.component.css']
})
export class GambleWindowComponent implements OnInit {

  redButton = 1;
  blackButton = 2;
  gamblingRow: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
