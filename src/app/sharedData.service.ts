import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  cartItems = [];

  constructor() { }


  setCartItems(cart) {
    this.cartItems = cart;
  }

  getCartItems() {
    return this.cartItems;
  }
}
