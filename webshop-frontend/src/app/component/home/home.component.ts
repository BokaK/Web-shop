import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

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

    this.userService.getAuthenticatedUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }

}
