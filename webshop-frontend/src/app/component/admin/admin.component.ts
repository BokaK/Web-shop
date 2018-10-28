import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem, SelectItem} from 'primeng/api';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminRoot = '/admin';
  items: MenuItem[];
  dropDownItems: SelectItem[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Тракториски делови',
        routerLink: this.adminRoot
      },
      {
        label: 'Компании',
        routerLink: this.adminRoot + '/brands'
      },
      {
        label: 'Корисници',
        routerLink: this.adminRoot + '/users'
      },
      {
        label: 'Нарачки',
        routerLink: this.adminRoot + '/orders'
      }
    ];

    this.dropDownItems = [
      {label: 'Промени лозинка', value: 'changePassword'},
      {label: 'Одјави се', value: 'logOff'}
      ];
  }

  getActiveItem(item: MenuItem) {
    if (item.routerLink === window.location.pathname) {
      return 'active';
    } else {
      return;
    }
  }

  dropDownItemOnClick(event) {
    if (event.value === 'changePassword') {
      this.router.navigateByUrl('/admin/orders');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
