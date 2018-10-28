import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MenuItem, SelectItem} from 'primeng/api';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  items: MenuItem[];
  dropDownItems: SelectItem[];
  user: User = new User();
  userRoot = '/user';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getActiveUser();

    this.items = [
      {
        label: 'Делови',
        routerLink: this.userRoot + '/parts'
      },
      {
        label: 'Нарачки',
        routerLink: this.userRoot + '/orders'
      },
      {
        label: 'Контакт',
        routerLink: this.userRoot + '/contact'
      }
    ];

    this.dropDownItems = [
      {label: 'Лични податоци', value: 'userInfo'},
      {label: 'Промени лозинка', value: 'changePassword'},
      {label: 'Одјави се', value: 'logOff'}];
  }

  getActiveUser() {
    this.user.username = 'Борка';
    // this.userService.getAuthenticatedUser().subscribe(data => {
    //   this.user = data;
    // })
  }

  getActiveItem(item: MenuItem) {
    if (item.routerLink === window.location.pathname) {
      return 'active';
    } else {
      return;
    }
  }

  // TODO
  dropDownItemOnClick(event) {
    if (event.value === 'changePassword') {
      this.router.navigateByUrl('/admin/orders');
    } else if (event.value === 'userInfo') {
      this.router.navigateByUrl(this.userRoot + '/account');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
