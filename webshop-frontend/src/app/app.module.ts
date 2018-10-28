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
import {PartImageService} from './service/part-image.service';
import {CheckoutService} from './service/chechkout.service';
import {CartItemService} from './service/cart-item.service';
import {UserPartsComponent} from './component/user/parts/parts.component';
import {UserOrdersComponent} from './component/user/orders/orders.component';
import {UserHomeComponent} from './component/user/home/home.component';
import {ShoppingCartComponent} from './component/user/shoppingCart/shopping-cart.component';
import {AccountInfoComponent} from './component/user/accountInfo/account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    AdminPartsComponent,
    AdminOrdersComponent,
    AdminUsersComponent,
    AdminBrandsComponent,
    UserPartsComponent,
    UserOrdersComponent,
    UserHomeComponent,
    ShoppingCartComponent,
    AccountInfoComponent
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
  providers: [DefaultService, UserService, AuthenticationService,
    PartService, BrandService, PartImageService, CheckoutService, CartItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
