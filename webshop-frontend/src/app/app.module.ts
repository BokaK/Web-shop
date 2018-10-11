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
import {UserComponent} from './component/user/user.component';
import {AdminComponent} from './component/admin/admin.component';
import {AdminPartsComponent} from './component/admin/parts/parts.component';
import {AdminOrdersComponent} from './component/admin/orders/orders.component';
import {AdminUsersComponent} from './component/admin/users/users.component';
import {PartService} from './service/part.service';
import {AdminBrandsComponent} from './component/admin/brands/brands.component';
import {BrandService} from './service/brand.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    AdminPartsComponent,
    AdminOrdersComponent,
    AdminUsersComponent,
    AdminBrandsComponent
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
  providers: [DefaultService, UserService, AuthenticationService, PartService, BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
