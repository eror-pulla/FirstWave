import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() selectedDemo: any;
  @Input() demoArr!: any[];
  @Output() demoChange = new EventEmitter<any>();
  
  constructor(private cdr: ChangeDetectorRef) {}

  form= new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email:  new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    device: new FormControl(),
    country: new FormControl('', Validators.required),
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
  @HostListener('document:keydown.escape', ['$event']) 
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isOpen) {
      this.onCloseModal();
    }
  }
  
  changeDemo(demo: any) {
    this.demoChange.emit(demo);
  }
  onCloseModal() {
    this.isOpen = false;
    this.closeModal.emit();
  }
  updateChecked(selectedDemo: any) {
    this.demoArr.forEach(demo => {
        demo.checked = (demo.value === selectedDemo);
    });
    // Update button class based on the selected checkbox
    this.updateButtonClass();
    // Trigger change detection manually
    this.cdr.detectChanges();
  }
  updateButtonClass() {
    const selectedDemoObj = this.demoArr.find(demo => demo.checked);
    if (selectedDemoObj) {
      this.selectedDemo = selectedDemoObj.value;
    }
  }


  
  submittedData: any;
  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
      this.form.reset();
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

showingToast: boolean = false;
showToast() {
  this.showingToast = true;
  setTimeout(() => {
    this.showingToast = false;
  }, 4000); // Hide the toast after 3 seconds
}


}



