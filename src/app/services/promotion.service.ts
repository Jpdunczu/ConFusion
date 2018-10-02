import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
  //getPromotions(): Promise<Promotion[]> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
    */
    //return of(PROMOTIONS).pipe(delay(2000)).toPromise();
    return of(PROMOTIONS).pipe(delay(2000));
  }

  // arrow function in TS is a shorthand way of writing a method.
  // filter the dishes array and filter out only the id which is specified.
  getPromotion(id: number): Observable<Promotion> {
  //getPromotion(id: number): Promise<Promotion> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    });
    */
    //return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)).toPromise();
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
  //getFeaturedPromotion(): Promise<Promotion> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]), 2000);
    });
    */
    //return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000)).toPromise();
    return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000));
  }
}
