import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppStore{
  heroes : Array<string>
}

@Component({
  selector: 'app-root',
  template : `
  <h1>NgRx | Collection</h1>
  <hr>
  <button (click)="avengerHeroes()">Avengers</button>
  <button (click)="justiceLeagueHeroes()">Justice League</button>
  <ol>
    <li *ngFor="let hero of heroes$ | async">{{ hero }}</li>
  </ol>
  `
})
export class AppComponent {
  title = 'ngrx-step2';
  heroes$:Observable<Array<string>>;

 constructor(private store:Store<AppStore>){
    this.heroes$ = this.store.select('heroes');
 }

 avengerHeroes(){
   this.store.dispatch({ type : 'AVENGERS'});
 }
 justiceLeagueHeroes(){
   this.store.dispatch({ type : 'JUSTICELEAGUE'});
 }
}
