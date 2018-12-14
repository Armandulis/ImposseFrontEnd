import { Component, OnInit } from '@angular/core';
import {BasketService} from "../shared/services/basket.service";
import {AuthenticationService} from "../shared/services/authentication.service";
import {Basket} from "../shared/models/basket";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user";
import {Product} from "../shared/models/product";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Basket;
  basketEmpty = false;

  constructor(private basketService: BasketService,
              private authService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    this.setBasket();
  }

  setBasket(){
    let username = this.authService.getUsername();
    this.userService.getUserByUsername(username).subscribe(
      user => {
        this.basketService.getBasket(user).subscribe(basket => {
          this.basket = basket;
          if(basket.products.length == 0){
            this.basketEmpty = true;
          }
        })
      });
  }

  deleteFromBasket(product: Product){
    this.basketService.deleteFromBasket(product, this.basket.user.id).subscribe();
    this.setBasket();
  }

  clearBasket(){
    this.basketService.emptyBasket(this.basket.user.id).subscribe();
    this.setBasket();
  }
}
