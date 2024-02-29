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
  
  services = [
    { image: "../../../../assets/imgs/01.svg", title: "Web Security", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." },
    { image: "../../../../assets/imgs/05.svg", title: "Network Monitoring", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." },
    { image: "../../../../assets/imgs/04.svg", title: "Data Encryption", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." },
    { image: "../../../../assets/imgs/07.svg", title: "Server Protection", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat." }
  ];
}
