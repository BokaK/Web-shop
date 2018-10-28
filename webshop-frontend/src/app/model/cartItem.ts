import {Part} from './part';
import {Cart} from './cart';

export class CartItem {
  quantity: number;
  part: Part;
  cart: Cart;
}
