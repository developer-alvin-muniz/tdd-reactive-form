import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderForm: FormGroup = new FormGroup({});

  // TODO implement a reactive form control for the fields in the html template
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      // For every input we have a control

      // this maps to the name input field...the validator required denotes
      // that it is a required field!
      name: ['', Validators.required],

      // we set email to a blank field
      email: [''],

      // we set the default selection of item to the Coffee value
      item: ['Coffee', Validators.required],

      // we set the size of the order form to default to Small
      size: ['Small',Validators.required],

      // we set the notes to be blank
      notes: ['']
    })
  }

  displayConfirmation() {
    console.log('Confirmation');
  }
}
