import { Component, OnInit } from '@angular/core';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  onSlideChange() {
    console.log('slide change');
  }

}
 