import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  selectedDemo: any = 'Cybersecurity';
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

  onDemoChange(event: any) {
    this.selectedDemo = event;
  }

  // onRadioChange(event: any) {
  //   this.selectedDemo = event.target.value;
  // }
  modalOpen: boolean = false;
  
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
