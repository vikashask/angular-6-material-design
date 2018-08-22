import { StepperComponent } from './components/layout/stepper/stepper.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModuleModule } from './share/material-module/material-module.module'

import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/formControls/auto-complete/auto-complete.component';
import { CheckBoxComponent } from './components/formControls/check-box/check-box.component';
import { DatePickerComponent } from './components/formControls/date-picker/date-picker.component';
import { FormFieldComponent } from './components/formControls/form-field/form-field.component';
import { InputComponent } from './components/formControls/input/input.component';
import { RadioButtonComponent } from './components/formControls/radio-button/radio-button.component';
import { SelectComponent } from './components/formControls/select/select.component';
import { SliderComponent } from './components/formControls/slider/slider.component';
import { SliderToggleComponent } from './components/formControls/slider-toggle/slider-toggle.component';
import { BadgeComponent } from './components/buttonIndicator/badge/badge.component';
import { ButtonComponent } from './components/buttonIndicator/button/button.component';
import { ButtonToggleComponent } from './components/buttonIndicator/button-toggle/button-toggle.component';
import { ChipsComponent } from './components/buttonIndicator/chips/chips.component';
import { CardComponent } from './components/layout/card/card.component';
import { DividerComponent } from './components/layout/divider/divider.component';
import { ExpansionPanelComponent } from './components/layout/expansion-panel/expansion-panel.component';
import { GridListComponent } from './components/layout/grid-list/grid-list.component';
import { ListComponent } from 'src/app/components/layout/list/list.component';
import { TabsComponent } from 'src/app/components/layout/tabs/tabs.component';
import { MenuComponent } from 'src/app/components/navigation/menu/menu.component';
import { SideNavComponent } from 'src/app/components/navigation/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CheckBoxComponent,
    DatePickerComponent,
    FormFieldComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SliderToggleComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipsComponent,
    ChipsComponent,
    ButtonToggleComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    MenuComponent,
    SideNavComponent
    
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
