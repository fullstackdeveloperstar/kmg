import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyKnkoComponent } from './buy-knko/buy-knko.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { KPointsComponent } from './k-points/k-points.component';
import { KnkoComponent } from './knko/knko.component';
import { CongratulationsComponent } from './buy-knko/congratulations/congratulations.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WrapComponent } from './wrap/wrap.component';
import {FormsModule} from "@angular/forms";

//services
import {HeaderServiceService} from "./shared/service/header-service.service";
import {UserService} from "./shared/service/user.service";
import {AuthGuard} from "./auth/auth.guard";

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyKnkoComponent,
    WithdrawComponent,
    ReferralsComponent,
    SettingsComponent,
    ProfileComponent,
    CongratulationsComponent,
    KPointsComponent,
    KnkoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    WrapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    HeaderServiceService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
