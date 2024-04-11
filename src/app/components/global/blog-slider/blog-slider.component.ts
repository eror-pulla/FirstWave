
import { Component, Input, Output, ViewEncapsulation, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import SwiperCore, { Navigation, Swiper, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation]);
import { Blog } from '../../blog/blog.component';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogSliderComponent implements OnInit {

  swiperOptions: SwiperOptions = {
        loop: false,
        slidesPerView: 3,    
        spaceBetween: 25,
        navigation:{
          nextEl: '.swiper-button-next-blog',
          prevEl: '.swiper-button-prev-blog',
        }
      };

  @Input() blogs: Blog[] = []; 

  currentCategory: string = 'Blogs';

  constructor() { }

  ngOnInit(): void {
    this.printBlogs();

  }

  onSlideChange() {
    console.log('slide change');
  }

  get filteredBlogs(): Blog[] {
    return this.blogs.filter(blog => blog.categories.includes(this.currentCategory));
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
  }

  printBlogs(){
    console.log(this.blogs);
  }
  scrollToTop() {
    window.scrollTo(0, 0);
    
  }
  removeCurrentBlog(currentIndex: number) {
    if (currentIndex >= 0 && currentIndex < this.filteredBlogs.length) {
      const removedBlog = this.filteredBlogs.splice(currentIndex, 1)[0];
      console.log(`Removed blog with title: ${removedBlog.title}`);
    }
  }
}
