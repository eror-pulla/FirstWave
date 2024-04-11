import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Input() selectedDemo: any;
  isOpen1: boolean = false;
  modalOpen1: boolean = false;
  modalOpen: boolean = false;

  constructor() { }
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
  openModal1() {
    this.modalOpen1 = true;
  }
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
