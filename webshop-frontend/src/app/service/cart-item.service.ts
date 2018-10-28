import {Injectable} from '@angular/core';
import {DefaultService} from './default.service';
import {HttpClient} from '@angular/common/http';
import {Checkout} from '../model/checkout';
import {catchError} from 'rxjs/operators';
import {CartItem} from '../model/cartItem';

@Injectable()
export class CartItemService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllCartItemsByCartId(cartId: string) {
    return this.http.get<CartItem[]>(this.adminUrl + '/cartItem/cartId/' + cartId).pipe(catchError(this.handleError));
  }
}
