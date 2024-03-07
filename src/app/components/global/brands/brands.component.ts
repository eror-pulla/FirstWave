import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  url: string[] = [];  
  constructor() { }
  ngOnInit(): void {
  // this.url.push();
  this.populateUrls();
  }
  populateUrls() {
    this.url.push('bloomberg.svg');
    this.url.push('stanford-university.svg');
    this.url.push('University_of_Cambridge.svg');
    this.url.push('microsoft.svg');
    this.url.push('eth-zurich.svg');
    this.url.push('fix.svg');
    this.url.push('google.svg');
    this.url.push('opengov.svg');
    this.url.push('Allegro.svg');
    this.url.push('amazon.svg');
    this.url.push('circleup.svg');
    this.url.push('google.svg');
  }
}
