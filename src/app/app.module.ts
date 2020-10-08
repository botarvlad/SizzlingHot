import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MachineComponentComponent } from './machine-component/machine-component.component';
import { SymbolComponent } from './symbol/symbol.component';
import { BalanceComponent } from './balance/balance.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponentComponent,
    SymbolComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
