import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as formActions from '@ngrx-store/form.actions'
import { USER } from 'src/app/interfaces/USER';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  
  constructor(private store: Store<{signup: any}>) {}

  ngOnInit(): void {
      this.signupForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      })
  }

  submitSignupForm(val: USER) {
    this.store.dispatch(formActions.addFormData({data: val}))
  }
}
