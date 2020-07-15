import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InterfaceComponent} from './interface/interface.component';
import {StartComponent} from './start/start.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import {DepositComponent} from './deposit/deposit.component';
import {BalanceComponent} from './balance/balance.component';
import {PinComponent} from './pin/pin.component';
import {ErrorPinComponent} from './error-pin/error-pin.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent},
  {path: 'pin', component: PinComponent},
  {path: 'interface', component: InterfaceComponent},
  {path: 'interface/withdraw', component: WithdrawComponent},
  {path: 'interface/deposit', component: DepositComponent},
  {path: 'interface/balance', component: BalanceComponent},
  {path: 'error', component: ErrorPinComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
