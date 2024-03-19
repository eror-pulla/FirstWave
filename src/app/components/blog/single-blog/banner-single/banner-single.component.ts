import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-banner-single',
  templateUrl: './banner-single.component.html',
  styleUrls: ['./banner-single.component.scss']
})
export class BannerSingleComponent implements OnInit {

  @Input() blog: any;

  constructor() { }
  ngOnInit(): void {
    this.pritnBlog();
  }
  pritnBlog(){
    console.log(this.blog);
  }
}
