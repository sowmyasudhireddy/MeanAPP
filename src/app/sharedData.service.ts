import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  cartItems = [];
  searchResults = [];

  constructor() { }


  setCartItems(cart) {
    this.cartItems = cart;
  }

  getCartItems() {
    return this.cartItems;
  }

  setSearchResults(results) {
    this.setSearchResults = results;
  }

  getSearchResults() {
    return this.searchResults;
  }

}
