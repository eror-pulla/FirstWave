import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-about-single',
  templateUrl: './banner-about-single.component.html',
  styleUrls: ['./banner-about-single.component.scss']
})
export class BannerAboutSingleComponent implements OnInit {

 @Input() member: any;

  constructor() { }

  ngOnInit(): void {
  }

}
