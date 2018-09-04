import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent} from './atm/atm.component';
import { TellerComponent} from './teller/teller.component';
import { ContactComponent } from './contact/contact.component';
import { OptionsComponent } from './options/options.component';
import { HistoryComponent } from './history/history.component';

export const router: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'atm', component: AtmComponent,
    children: [ 
      {path: 'options', component: OptionsComponent },
      {path: 'history', component: HistoryComponent },
      ] },
  { path: 'teller', component: TellerComponent,
    children: [ 
      {path: 'history', component: HistoryComponent },
      // {path: 'teller', component: TellerComponent}
      ]
  },
  { path: 'contact', component: ContactComponent },
 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
