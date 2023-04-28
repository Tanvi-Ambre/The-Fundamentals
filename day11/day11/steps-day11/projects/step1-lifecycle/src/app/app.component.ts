import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <h1>Parent Application</h1>
  <input type="checkbox" (change)="agree = !agree">
  <button (click)="increaseHandler()">Increase</button>
  <button (click)="decreaseHandler()">Decrease</button>
  <hr>
  <app-child [power]="childPower" *ngIf="agree"></app-child>
  `
})
export class AppComponent implements  OnInit, 
                                      OnChanges, 
                                      OnDestroy, 
                                      DoCheck,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked{
  title = 'step1-lifecycle';
  agree = true;
  childPower = 0 ;
  constructor(){
    console.log("constructor of AppComponent was called");
  }
  increaseHandler(){
    this.childPower++;
  }
  decreaseHandler(){
    this.childPower--;
  }
  ngOnInit(){
    console.log("ngOnInit of AppComponent was called");
  }
  ngOnChanges(){
      console.log("ngOnChanges of AppComponent was called");
  }
  ngAfterContentChecked(){
      console.log("ngAfterContentChecked of AppComponent was called");
  }
  ngAfterContentInit(){
      console.log("ngAfterContentInit of AppComponent was called");
  }
  ngAfterViewChecked(){
      console.log("ngAfterViewChecked of AppComponent was called");
  }
  ngDoCheck(){
      console.log("ngDoCheck of AppComponent was called");
  }
  ngAfterViewInit(){
      console.log("ngAfterViewInit of AppComponent was called");
  }
  ngOnDestroy(){
      console.log("ngOnDestroy of AppComponent was called");
  }
}
