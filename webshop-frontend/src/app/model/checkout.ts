import {Cart} from './cart';
import {User} from './user';

export class Checkout {
  checkoutStatus: string;
  user: User;
  cart: Cart;
  orderDate: Date;
  id: string;
}
