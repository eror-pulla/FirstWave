import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  selectedDemo: any = 'Cybersecurity';
  modalOpen: boolean = false;
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

  constructor() { 
  }

  ngOnInit(): void {
  }
  onDemoChange(event: any) {
    this.selectedDemo = event;
  }
  openModal() {
    this.modalOpen = true;
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
