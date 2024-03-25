import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Input() selectedDemo: any;
  @Output() demoChange = new EventEmitter<any>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  isOpen1: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }
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
  ngOnInit(): void {
  }
  modalOpen1: boolean = false;
  openModal1() {
    this.modalOpen1 = true;
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
