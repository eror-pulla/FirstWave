import { Component, Input, ViewEncapsulation, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import SwiperCore, { Navigation, Swiper, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-blog-banner',
  templateUrl: './blog-banner.component.html',
  styleUrls: ['./blog-banner.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class BlogBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  swiper = new Swiper('.swiper-hero', {
    speed: 400,
    spaceBetween: 100,
  });

  swiperOptions: SwiperOptions = {
    spaceBetween: 0,
    centeredSlides: true,
    loop: false,
    slidesPerView: 1,
    effect:'fade',
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation:{
      nextEl: '.swiper-button-next-banner',
      prevEl: '.swiper-button-prev-banner',
    }

  };

  onSlideChange2() {
    console.log('slide change');
  }


}
