import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
  //getLeaders(): Promise<Leader[]> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(LEADERS), 2000);
    });
    */
    //return of(LEADERS).pipe(delay(2000)).toPromise();
    //return of(LEADERS).pipe(delay(2000));
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
  //getLeader(id: number): Promise<Leader> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(LEADERS.filter((Leader) => (Leader.id === id ))[0]), 2000);
    });
    */
    //return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000)).toPromise();
    //return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
    return this.restangular.one('leaders').get();
  }

  getfeaturedLeader(): Observable<Leader> {
  //getfeaturedLeader(): Promise<Leader> {
    /*
    return new Promise(resolve => { 
      // simulate a short delay from server latency with 2 second delay.
      setTimeout(() => resolve(LEADERS.filter((Leader) => (Leader.featured))[0]), 2000);
    });
    */
    //return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000)).toPromise();
    //return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
    return this.restangular.all('leaders').getList({featured: true})
      .pipe(map(leader => leader[0]));
  }
}
