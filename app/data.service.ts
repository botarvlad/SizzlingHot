import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { filter } from 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private balanceSubject: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { 
    this.balanceSubject.next(0);
  }

  getBalance() {
    return this.balanceSubject.asObservable().pipe(/*filter(i => i !== null)*/);
  }

  setBalance(val: number) {
    this.balanceSubject.next(val);
  }
}
