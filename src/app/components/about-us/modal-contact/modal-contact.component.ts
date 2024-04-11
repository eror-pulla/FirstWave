import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss']
})
export class ModalContactComponent{
  @Input() isOpen: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  modalOpen: boolean = false;
  isOpen1: boolean = false;
  submittedData: any;
  showingToast: boolean = false;

  constructor() { }

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


  openModal1() {
    this.modalOpen = true;
  }

  @HostListener('document:keydown.escape', ['$event']) 
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isOpen) {
      this.onCloseModal();
    }
  }
  onCloseModal() {
    this.isOpen1 = false;
    this.closeModal.emit();
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
      this.showToast(); 
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onCloseModalSubmitted1() {
    this.submittedData = !this.submittedData;
    this.form.reset();    
    this.isOpen = false;
    this.closeModal.emit();
  }

  showToast() {
    this.showingToast = true;
    setTimeout(() => {
      this.showingToast = false;
    }, 3000); 
  }
}
