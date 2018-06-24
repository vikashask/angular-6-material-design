import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selected = 'option2';

  disableSelect = new FormControl(false);
  
  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  constructor() { }

  ngOnInit() {
  }

  changeValue(e){
    console.log(e);
    
  }
}
