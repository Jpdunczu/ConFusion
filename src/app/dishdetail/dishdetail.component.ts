// when a property is being bound, we can use the input module
import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  
  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);

    // fetch the info
    // what is snapshot: taking one snapshot from the route service, obtaining the value of the params at that particular time.
    //let id = +this.route.snapshot.params['id'];
    this.route.params.pipe(
    // the + converts this which is a string to an int value.
      switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
    //this.dishservice.getDish(id)
      //.then(dish => this.dish = dish);
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  // add a back button into the card
  goBack(): void {
    // location service has a method to go back
    this.location.back();
  }

}
