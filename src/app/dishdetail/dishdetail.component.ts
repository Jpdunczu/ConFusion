// when a property is being bound, we can use the input module
import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  
  dish: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // fetch the info
    let id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id)
      //.then(dish => this.dish = dish);
      .subscribe(dish => this.dish = dish);
  }

  // add a back button into the card
  goBack(): void {
    // location service has a method to go back
    this.location.back();
  }

}
