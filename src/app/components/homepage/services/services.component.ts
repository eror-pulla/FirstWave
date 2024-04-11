import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit  {
  @Input() isOpen: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() selectedDemo: any;
  @Output() demoChange = new EventEmitter<any>();
  services: { image: string, title: string, text: string }[] = [];
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
  modalOpen: boolean = false;
  constructor(private cdr: ChangeDetectorRef) { 
    this.populateServices();
  }

  ngOnInit(): void {
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
        demo.checked = (demo.value === selectedDemo);
    });
    this.cdr.detectChanges();
  }
  updateButtonClass() {
  const selectedDemoObj = this.demoArr.find(demo => demo.checked);
  if (selectedDemoObj) {
    this.selectedDemo = selectedDemoObj.value;
  }
  }
  populateServices() {
    this.services.push(
      { image: "01.svg", title: "Web Security", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." },
      { image: "05.svg", title: "Network Monitoring", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." },
      { image: "04.svg", title: "Data Encryption", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." },
      { image: "07.svg", title: "Server Protection", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." }
    );
  }
}
