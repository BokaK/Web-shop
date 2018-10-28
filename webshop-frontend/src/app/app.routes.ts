import {Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {UserComponent} from './component/user/user.component';
import {AdminPartsComponent} from './component/admin/parts/parts.component';
import {AdminComponent} from './component/admin/admin.component';
import {AdminOrdersComponent} from './component/admin/orders/orders.component';
import {AdminUsersComponent} from './component/admin/users/users.component';
import {AdminBrandsComponent} from './component/admin/brands/brands.component';
import {UserHomeComponent} from './component/user/home/home.component';
import {UserOrdersComponent} from './component/user/orders/orders.component';
import {UserPartsComponent} from './component/user/parts/parts.component';
import {ShoppingCartComponent} from './component/user/shoppingCart/shopping-cart.component';
import {AccountInfoComponent} from './component/user/accountInfo/account-info.component';

export const ROUTES: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserPartsComponent
      },
      {
        path: 'contact',
        component: UserHomeComponent
      },
      {
        path: 'orders',
        component: UserOrdersComponent
      },
      {
        path: 'parts',
        component: UserPartsComponent
      },
      {
        path: 'cart',
        component: ShoppingCartComponent
      },
      {
        path: 'account',
        component: AccountInfoComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminPartsComponent
      },
      {
        path: 'orders',
        component: AdminOrdersComponent
      },
      {
        path: 'users',
        component: AdminUsersComponent
      },
      {
        path: 'brands',
        component: AdminBrandsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/admin',
  }

];
