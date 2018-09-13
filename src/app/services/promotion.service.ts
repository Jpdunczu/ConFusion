import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  // arrow function in TS is a shorthand way of writing a method.
  // filter the dishes array and filter out only the id which is specified.
  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promo) => (promo.featured))[0];
  }
}
