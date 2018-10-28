import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingCartComponent implements OnInit {

  items: MenuItem[];
  showStep1: true;
  showStep2: false;
  showStep3: false;

  ngOnInit() {
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
  }
}
