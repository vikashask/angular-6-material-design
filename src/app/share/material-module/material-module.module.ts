import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
 } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    
  ],
  exports: [
    MatButtonModule,
   
  ],
  providers: [
    // {provide: 'YYYY-MM-DD', useValue: 'YYYY-MM-DD'},
  ],
  declarations: []
})
export class MaterialModuleModule { }
