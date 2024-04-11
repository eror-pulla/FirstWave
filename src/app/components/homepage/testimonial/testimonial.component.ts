import { Component, Input, ViewEncapsulation, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import SwiperCore, { Navigation, Swiper, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  swiper = new Swiper('.swiper-testimonial', {
    speed: 400,
    spaceBetween: 100,
  });

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    effect:'fade',
    pagination: { 
      el: '.swiper-pagination', 
      type:'bullets',
      clickable: true },
  };

  onSlideChange() {
    console.log('slide change');
  }
}
