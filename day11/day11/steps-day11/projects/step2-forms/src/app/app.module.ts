import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateForm } from './components/template-form.component';
import { ReactiveDataForm } from './components/reactive-form.component';
import { ReactiveDataFormBuilder } from './components/reactive-form-builder.component';

@NgModule({
  declarations: [  AppComponent, TemplateForm, ReactiveDataForm, ReactiveDataFormBuilder ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
