import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
//import { Http, Response } from '@angular/http'; //import { DISHES } from '../shared/dishes';
import { HttpClient } from '@angular/common/http';

import { baseURL } from '../shared/baseurl';
//import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';

// supply the Dishes JS object array to any script that requires it.
// needs to be injected 
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,) { }

  getDishes(): Observable<Dish[]> {
  //getDishes(): Promise<Dish[]> {
    // this is not a real Promise, as it does not deal with the fact that the service may not reolve immediately.
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(DISHES), 2000);
    });
    */
    //return of(DISHES).pipe(delay(2000)).toPromise();
    //return of(DISHES).pipe(delay(2000));
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  // arrow function in TS is a shorthand way of writing a method.
  // filter the dishes array and filter out only the id which is specified.
  getDish(id: number): Observable<Dish> {
  //getDish(id: number): Promise<Dish> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
    */
    //return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)).toPromise();
    //return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
  //getFeaturedDish(): Promise<Dish> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[0]), 2000);
    });
    */
    //return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
    //return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    return this.http.get<Dish>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    //return of(DISHES.map(dish => dish.id));
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }

}
