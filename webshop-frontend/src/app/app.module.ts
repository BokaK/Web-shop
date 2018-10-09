import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {LoginComponent} from './component/login/login.component';
import {PrimengModule} from './primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './service/user.service';
import {DefaultService} from './service/default.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './service/authentication.service';
import {HomeComponent} from './component/home/home.component';
import {PartComponent} from './component/part/part.component';
import {AuthGuard} from './service/auth.guard';
import {AuthService} from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PartComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DefaultService, UserService, AuthService, AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
