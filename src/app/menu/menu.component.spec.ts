import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuComponent } from './menu.component';

//import { MaterialModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseurl';
import { Observable, of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  let dishServiceStub = {
    // mock getDishes
    getDishes: function(): Observable<Dish[]> {
      return of(DISHES);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([
          {path: 'menu', component: MenuComponent}
        ])
      ],
      declarations: [ MenuComponent ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: baseURL }
      ]
    })
    .compileComponents();

    let dishService = TestBed.get(DishService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to see whether Dishes var inside my menu comp is actually receiving the values or not
  it('dishes items should be 4', () => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[1].name).toBe('Zucchipakoda');
    expect(component.dishes[3].featured).toBeTruthy(); // should fail
  });

  it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de: DebugElement;
    let el: HTMLElement;

    // get acces from the DOM Document object Model
    // 'By' access to specific elements in the DOM
    de = fixture.debugElement.query(By.css('h1'));
    // get access to the element which I specified in 'de'
    el = de.nativeElement;

    // check if the DISHES[0].name is included in the DOM first h1 element and that it uses the uppercase pipe.
    expect(el.textContent).toContain(DISHES[0].name.toUpperCase());
  });

});
