import { Component, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form= new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email:  new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    device: new FormControl(),
    country: new FormControl(),
    message: new FormControl()
  });
  get name(){
    return this.form.get('name');
  }
  get surname(){
    return this.form.get('surname');
  }
  get email(){
    return this.form.get('email');
  }
  get number(){
    return this.form.get('number');
  }
  get country(){
    return this.form.get('country');
  }
  showingToast: boolean = false;
  showToast() {
    this.showingToast = true;
    setTimeout(() => {
      this.showingToast = false;
    }, 3000); 
  }

  submittedData: any;
  onCloseModalSubmitted1() {
    this.submittedData = !this.submittedData;
    this.form.reset();    
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
      this.showToast(); 
      console.log('Form Submitted!', this.form.value);
      this.form.reset();    

    } else {
      console.log('Form is invalid');
    }
  }
}
