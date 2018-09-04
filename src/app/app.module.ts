import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { BankService } from './bank.service';

import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    ContactComponent,
    HistoryComponent,
    OptionsComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
