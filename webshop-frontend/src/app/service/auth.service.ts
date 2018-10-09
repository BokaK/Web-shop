import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
// import {SessionStorageService} from 'ngx-webstorage/dist/app';
import {UserService} from './user.service';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    // private sessionStorage:SessionStorageService,
    private userService: UserService,
    private router: Router,
    private zone: NgZone
  ) {
  }

  get isLoggedIn() {

    // if(this.sessionStorage.retrieve('client'))
    // {
    //     this.loggedIn.next(true);
    // }
    // else
    // {
    //     this.loggedIn.next(false);
    // }

    return this.loggedIn.asObservable();
  }

  store(auth: any) {
    // this.sessionStorage.store('client', auth);
  }

  logout() {
    // this.sessionStorage.clear('client');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
