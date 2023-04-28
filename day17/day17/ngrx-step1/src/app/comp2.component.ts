import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppStore{
  message : string
}

@Component({
  selector: 'app-comp2',
  template : `
  <h2>Greeting : {{ message$ | async }}</h2>
  <button (click)="helloGujarati()">Gujarati</button>
  <button (click)="helloHindi()">Hindi</button>
  <button (click)="helloKannada()">Kannada</button>
  <button (click)="helloMarathi()">Marathi</button>
  <button (click)="helloOdiya()">Odiya</button>
  <button (click)="helloTamil()">Tamil</button>
  <button (click)="helloTelugu()">Telugu</button>
  `
})
export class Comp2Component {
  message$ : Observable<string>;
  constructor(private store : Store<AppStore>){
    this.message$ = this.store.select('message');
  }
  helloGujarati(){
    this.store.dispatch({ type : "GUJARATI"});
  }
  helloHindi(){
    this.store.dispatch({ type : "HINDI"});
  }
  helloKannada(){
    this.store.dispatch({ type : "KANNADA"});
  }
  helloMarathi(){
    this.store.dispatch({ type : "MARATHI"});
  }
  helloOdiya(){
    this.store.dispatch({ type : "ODIYA"});
  }
  helloTamil(){
    this.store.dispatch({ type : "TAMIL"});
  }
  helloTelugu(){
    this.store.dispatch({ type : "TELUGU"});
  }

}
