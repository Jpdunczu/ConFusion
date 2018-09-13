import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

// supply the Dishes JS object array to any script that requires it.
// needs to be injected 
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  // arrow function in TS is a shorthand way of writing a method.
  // filter the dishes array and filter out only the id which is specified.
  getDish(id: number): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => (dish.featured))[0];
  }

}
