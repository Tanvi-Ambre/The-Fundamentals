import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1> Hello NgRx </h1>
  <hr>
  <app-comp1></app-comp1>
  <app-comp2></app-comp2>
  `
})
export class AppComponent {
  title = 'ngrx-step1';
}
