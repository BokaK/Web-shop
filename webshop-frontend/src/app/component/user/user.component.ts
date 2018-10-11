import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  items: MenuItem[];
  user: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Почетна'
      },
      {
        label: 'Делови'
      },
      {
        label: 'Нарачки'
      }
    ];

    // this.userService.getAuthenticatedUser().subscribe(data => {
    //   this.user = data;
    // });
    console.log('vo user');
  }

}
