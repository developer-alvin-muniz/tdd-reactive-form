import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormComponent } from './order-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an order form component', () => {
    const orderForm = fixture.debugElement.nativeElement.querySelector('#order-form');
    expect(orderForm).toBeTruthy();
  })

  it('should be set up with appropriate fields', () => {
    const notesField = fixture.debugElement.nativeElement.querySelector('#notes-field');
    expect(notesField).toBeTruthy();

    const nameField = fixture.debugElement.nativeElement.querySelector('#name-field');
    expect(nameField).toBeTruthy();

    const emailField = fixture.debugElement.nativeElement.querySelector('#email-field');
    expect(emailField).toBeTruthy();

    const smallSizeField = fixture.debugElement.nativeElement.querySelector('#small-size-field');
    expect(smallSizeField).toBeTruthy();

    const mediumSizeField = fixture.debugElement.nativeElement.querySelector('#medium-size-field');
    expect(mediumSizeField).toBeTruthy();

    const largeSizeField = fixture.debugElement.nativeElement.querySelector('#large-size-field');
    expect(largeSizeField).toBeTruthy();

    const itemField = fixture.debugElement.nativeElement.querySelector('#item-field');
    expect(itemField).toBeTruthy();

  })

});
