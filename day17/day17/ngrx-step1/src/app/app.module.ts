import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';
import { helloReducer } from './hello.reducer';

@NgModule({
  declarations: [ AppComponent, Comp1Component, Comp2Component ],
  imports: [ BrowserModule, StoreModule.forRoot( { message : helloReducer } ) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
