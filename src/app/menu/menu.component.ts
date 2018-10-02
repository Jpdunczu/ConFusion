import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // typescript types can be implictly defined.
  // dishes: Dish[] = DISHES;

  dishes: Dish[];
  errMess: string;

  // selectedDish: Dish;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    // ask the service to fetch the required information. 
    // This lifecycle method is executed by Angular whenever this object is instantiated.
    // chaining the .then method from the Promise
    // Observables use the .subscribe
    this.dishService.getDishes()
      //.then(dishes => this.dishes = dishes);
      .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess.message);  // subscribe provides its' own error handling.
  }
/*
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
*/
}
