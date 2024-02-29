import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
// 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() selectedDemo: any;
  // @Input() demoArr!: any[];
  @Output() demoChange = new EventEmitter<any>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();


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
  // updateChecked(selectedDemo: any) {
  //   this.demoArr.forEach(demo => {
  //       demo.checked = (demo.value === selectedDemo);
  //   });
  //   this.cdr.detectChanges();
  // }
  // updateButtonClass() {
  // const selectedDemoObj = this.demoArr.find(demo => demo.checked);
  // if (selectedDemoObj) {
  //   this.selectedDemo = selectedDemoObj.value;
  // }
  // }
  updateChecked(selectedDemo: any) {
    // Loop through demoArr to find the selected checkbox and toggle its state
    this.demoArr.forEach(demo => {
      if (demo.value === selectedDemo) {
        demo.checked = !demo.checked; // Toggle the checkbox state
      }
    });
  }

}

