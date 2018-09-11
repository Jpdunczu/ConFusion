import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // use the selector to create a tag which then can be controlled by a component.
  templateUrl: './app.component.html', // specifies the name of the template file for this particular component.
  // template: `<h1>{{title}}</h1>`, can use backquotes to specify in-line templates, can do the same for styles.
  styleUrls: ['./app.component.scss'] // styles can be supplied to components.
})
export class AppComponent {
  title = 'conFusion2';
}
