import { Component, OnInit, Input, Output, EventEmitter, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() selectedDemo: any;
  @Input() demoArr!: any[];
  @Output() demoChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  modalOpen: boolean = false;
  openModal() {
    this.modalOpen = true;
  }
  onDemoChange(event: any) {
    this.selectedDemo = event;
  }
  updateChecked(selectedDemo: any) {
    this.demoArr.forEach(demo => {
      if (demo.value === selectedDemo) {
        demo.checked = true;
      } else {
        demo.checked = false;
      }
    });
  }
  
}
