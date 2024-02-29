import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() selectedDemo: any;
  // @Input() demoArr!: any[];
  @Output() demoChange = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) { }
  demoArr = [
    {
      label:'Cybersecurity',
      value: 'Cybersecurity',
      class:'blue-btn',
      checked: true
    },
    {
      label:'Network Management',
      value: 'Network Management',
      class:'green-btn',
      checked: false
    },
  ];
  ngOnInit(): void {
  }
  modalOpen: boolean = false;
  openModal() {
    this.modalOpen = true; 
    console.log(this.demoArr);
  }
  onDemoChange(event: any) {
    this.selectedDemo = event;
  }
  updateChecked(selectedDemo: any) {
    this.demoArr.forEach(demo => {
        demo.checked = (demo.value === selectedDemo);
    });
    // this.updateButtonClass();
    this.cdr.detectChanges();
  }
  updateButtonClass() {
  const selectedDemoObj = this.demoArr.find(demo => demo.checked);
  if (selectedDemoObj) {
    this.selectedDemo = selectedDemoObj.value;
  }
  }


}
