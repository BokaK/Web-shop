import {Component, OnInit} from '@angular/core';
import {Checkout} from '../../../model/checkout';
import {CheckoutService} from '../../../service/chechkout.service';
import {CartItemService} from '../../../service/cart-item.service';
import {CartItem} from '../../../model/cartItem';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  checkouts: Checkout[];
  cartItems: CartItem[] = [];
  cols: any[];
  checkoutStatusList: SelectItem[];
  translatedCheckoutStatuses: any;

  constructor(private checkoutService: CheckoutService,
              private cartItemService: CartItemService) {

  }

  ngOnInit(): void {
    this.cols = [
      {header: 'Контакт'},
      {header: 'Информации за достава'},
      {header: 'Кошничка'},
      {header: 'Вкупно за плаќање'},
      {header: 'Статус на нарачка'},
      {header: 'Промени статус на нарачка'}
    ];

    this.checkoutStatusList = [{
        'label': 'Потврди',
        'value': 'APPROVED'
      },
      {
        'label': 'Откажи',
        'value': 'CANCELED_BY_ADMIN'
      }
    ];

    this.translatedCheckoutStatuses = {
      'APPROVED': 'Потврдена',
      'PENDING': 'На чекање',
      'ISSUED': 'Испорачана',
      'CANCELED_BY_USER' : 'Откажана од корисникот',
      'CANCELED_BY_ADMIN' : 'Откажана од администраторот'
    };
    this.getAllCheckouts();
  }

  getAllCheckouts() {
    this.checkoutService.getAllCheckouts().subscribe(data => {
      this.checkouts = data;
      this.cartItems = [];
      for (let i = 0; i < this.checkouts.length; i++) {
        this.cartItemService.getAllCartItemsByCartId(this.checkouts[0].id)
          .subscribe(cartItems => {
            for (let j = 0; j < cartItems.length; j++) {
              this.cartItems.push(cartItems[j]);
            }
          })
      }
    })
  }

  changeCheckoutStatus(checkout: Checkout, value) {
    checkout.checkoutStatus = value;
    this.checkoutService.updateCheckout(checkout).subscribe(data => {
      this.getAllCheckouts();
    });
  }
}
