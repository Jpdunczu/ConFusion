// when a property is being bound, we can use the input module
import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
