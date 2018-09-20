import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  // arrow function in TS is a shorthand way of writing a method.
  // filter the dishes array and filter out only the id which is specified.
  getPromotion(id: number): Promise<Promotion> {
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]), 2000);
    });
  }
}
