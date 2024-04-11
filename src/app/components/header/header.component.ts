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
  @Output() demoChange = new EventEmitter<any>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  demoArr = [
    {
      label:'Cybersecurity',
      value: 'Cybersecurity',
      class:'blue-btn',
      checked: false
    },
    {
      label:'Network Management',
      value: 'Network Management',
      class:'green-btn',
      checked: false
    },

  ];
  constructor(private cdr: ChangeDetectorRef) { }

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
      if (demo.value === selectedDemo) {
        demo.checked = !demo.checked; 
      }
    });
  }

}

