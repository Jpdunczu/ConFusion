// Routes
import { Routes } from '@angular/router';

// Components
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactComponent},
    {path: 'menu', component: MenuComponent},
    // :(name) defines a route parameter which the [routerLink]="['/dishdetail', dish.id]" passes in.
    {path: 'dishdetail/:id', component: DishdetailComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

