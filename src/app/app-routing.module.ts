import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {BuyKnkoComponent} from "./buy-knko/buy-knko.component";
import {ReferralsComponent} from "./referrals/referrals.component";
import {WithdrawComponent} from "./withdraw/withdraw.component";
import {SettingsComponent} from "./settings/settings.component";
import {KPointsComponent} from "./k-points/k-points.component"
import {KnkoComponent} from "./knko/knko.component"
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {WrapComponent} from "./wrap/wrap.component";
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    component: WrapComponent,
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        component: HomeComponent,
        path: 'home'
      },
      {
        component: ProfileComponent,
        path: 'profile'
      },
      {
        component: BuyKnkoComponent,
        path: 'buy-knko'
      },
      {
        component: ReferralsComponent,
        path: 'referrals'
      },
      {
        component: WithdrawComponent,
        path: 'withdraw'
      },
      {
        component: SettingsComponent,
        path: 'settings'
      },
      {
        component: KPointsComponent,
        path: 'k-points'
      },
      {
        component: KnkoComponent,
        path: 'knko'
      },
    ]
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: SignupComponent,
    path: 'signup'
  },
  {
    path: '', redirectTo:'/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
