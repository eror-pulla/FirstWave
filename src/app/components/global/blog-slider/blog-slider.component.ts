import { Component, Input, Output, ViewEncapsulation, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import SwiperCore, { Navigation, Swiper, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation]);

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  readingTime: string;
  categories: string[];
  bigTitle: string
}
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

  
  @Output() blogDataEmitter = new EventEmitter<any>();
  blogs: Blog[] = [];
  currentCategory: string = 'Blogs';
  populateBlogs() {
    this.blogs.push(
      { 
        id:'1',
        title: 'Reasoning Ability',
        image: "blog-slider1.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Webinars'],
        bigTitle:'Using Configuration Management to Detect Unwanted Software',    
      },
      { 
        id:'2',
        title: 'Personality Assessment',
        image: "blog-slider2.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Podcasts', 'Webinars'],
        bigTitle:'Personality Assessment ipsum do eiusmod tempor ',   
      },
      { 
        id:'3',

        title: 'Cope Inventory',
        image: "blog-slider3.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'White Papers', 'Case Studies'],
        bigTitle:'Cope Inventory ipsum do eiusmod tempor ',   
      },
      { 
        id:'4',
        title: 'Entrepreneurial Personality',
        image: "blog-slider1.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Enterprise'],
        bigTitle:'Entrepreneurial Personality ipsum do eiusmod tempor ',   
      },
      { 
        id:'5',
        title: 'Enterprise Functions',
        image: "blog-slider2.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Enterprise', 'Case Studies' , 'Podcasts' ],
        bigTitle:'Enterprise Functions ipsum do eiusmod tempor',   
      },
      { 
        id:'6',
        title: 'Personality Assessment',
        image: "blog-slider1.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Podcasts', 'Webinars'],
        bigTitle:'',   
      },
      { 
        id:'7',
        title: 'Cope Inventory',
        image: "blog-slider3.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'White Papers', 'Case Studies'],
        bigTitle:'Personality Assessment2',   
      },
      { 
        id:'8',
        title: 'Enterprise Functions',
        image: "blog-slider2.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Enterprise', 'Case Studies' , 'Podcasts' ],
        bigTitle:'Enterprise Functions 2',   
      },
    );
    this.blogDataEmitter.emit(this.blogs);
  }
  filteredBlogs: Blog[] = [];
  constructor() { }
  ngOnInit(): void {
    this.populateBlogs();
    this.filteredBlogs = [...this.blogs];
  }
  filterByCategory(category: string) {
    this.currentCategory = category;
    this.filteredBlogs = this.blogs.filter(blog => blog.categories.includes(category));  
  }
  

  onSlideChange() {
    console.log('slide change');
  }
}
