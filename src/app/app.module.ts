import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MachineComponentComponent } from './machine-component/machine-component.component';
import { SymbolComponent } from './symbol/symbol.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponentComponent,
    SymbolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
