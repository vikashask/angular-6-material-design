import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModuleModule } from './share/material-module/material-module.module'

import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/formControls/auto-complete/auto-complete.component';
import { CheckBoxComponent } from './components/formControls/check-box/check-box.component';
import { DatePickerComponent } from './components/formControls/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CheckBoxComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
