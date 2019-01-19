import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { SharedDataService } from '../sharedData.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any;
  cart = [];

  constructor(private productService: ProductsService, private sharedService: SharedDataService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);
    });
  }

  addToCart(product) {
    this.cart.push(product);
    this.sharedService.setCartItems(this.cart);
  }

  removeItem(product) {
    const updatedCart = [];
    for (let i = 0; i < this.cart.length; i++) {
      if (product.productName !== this.cart[i].productName) {
        updatedCart.push(this.cart[i]);
      }
    }
    this.cart = updatedCart;
  }

  filterProducts(products) {
    this.products = products;
  }
}
