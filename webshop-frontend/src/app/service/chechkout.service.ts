import {Injectable} from '@angular/core';
import {DefaultService} from './default.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Checkout} from '../model/checkout';
import {catchError} from 'rxjs/operators';

@Injectable()
export class CheckoutService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllCheckouts(): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(this.adminUrl + '/checkout/getAll').pipe(catchError(this.handleError));
  }

  saveCheckout(checkout: Checkout) {
    return this.http.post<any>(this.adminUrl + '/checkout/save', checkout).pipe(catchError(this.handleError));
  }

  updateCheckout(checkout: Checkout) {
    return this.http.post<any>(this.adminUrl + '/checkout/update', checkout).pipe(catchError(this.handleError));
  }

  deleteCheckout(checkout: Checkout) {
    return this.http.post<any>(this.adminUrl + '/checkout/delete', checkout).pipe(catchError(this.handleError));
  }
}
