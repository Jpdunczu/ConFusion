import { Component, OnInit } from '@angular/core';

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

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    // ask the service to fetch the required information. 
    // This lifecycle method is executed by Angular whenever this object is instantiated.
    // chaining the .then method from the Promise
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
