import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  adminRoot = '/admin';
  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Тракториски делови',
        routerLink: this.adminRoot + '/'
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
  }

}
