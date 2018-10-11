import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: any = { type: 'User' };

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.user.type = 'Admin';

    if (this.user.type === 'User') {
      this.router.navigateByUrl('/user');
    } else {
      this.router.navigateByUrl('/admin');
    }
  }

}
