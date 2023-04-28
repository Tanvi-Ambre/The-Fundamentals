import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1>Forms in Angular</h1>
  <hr>
  <app-template-form></app-template-form>
  <hr>
  <app-reactive-form></app-reactive-form>
  <hr>
  <app-reactive-form-builder></app-reactive-form-builder>
  `
})
export class AppComponent {
  title = 'step2-forms';
}
