import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MachineComponentComponent } from './machine-component/machine-component.component';
import { SymbolComponent } from './symbol/symbol.component';
import { BalanceComponent } from './balance/balance.component';
import { FormsModule } from '@angular/forms';
import { GambleWindowComponent } from './gamble-window/gamble-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponentComponent,
    SymbolComponent,
    BalanceComponent,
    GambleWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
