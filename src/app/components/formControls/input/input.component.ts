import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective,NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  form: FormGroup;   

  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
 
    this.form.controls['email'].setValue("vikash");
  }

  onSubmit(Formvalue){
    console.log(Formvalue);
  }

}
