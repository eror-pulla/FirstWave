import { Component, Input, ViewEncapsulation, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import SwiperCore, { Navigation, Swiper, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation]);
interface Blog {
  title: string;
  image: string;
  description: string;
  url: string;
  readingTime: string;
  categories: string[];
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

  currentCategory: string = 'Blogs';
  blogs: Blog[] = [
    { 
      title: 'Reasoning Ability',
      image: "../../../assets/imgs/blog-slider1.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Blogs', 'Webinars']    
    },
    { 
      title: 'Personality Assessment',
      image: "../../../assets/imgs/blog-slider2.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Blogs', 'Podcasts', 'Webinars']    
    },
    { 
      title: 'Cope Inventory',
      image: "../../../assets/imgs/blog-slider3.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Blogs', 'White Papers', 'Case Studies']
    },
    { 
      title: 'Entrepreneurial Personality',
      image: "../../../assets/imgs/blog-slider1.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Blogs', 'Enterprise']
    },
    { 
      title: 'Enterprise Functions',
      image: "../../../assets/imgs/blog-slider2.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
    },
    { 
      title: 'Personality Assessment',
      image: "../../../assets/imgs/blog-slider1.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Blogs', 'Podcasts', 'Webinars']    
    },
    { 
      title: 'Cope Inventory',
      image: "../../../assets/imgs/blog-slider3.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Blogs', 'White Papers', 'Case Studies']
    },
    { 
      title: 'Enterprise Functions',
      image: "../../../assets/imgs/blog-slider2.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
    },
    { 
      title: 'Enterprise Functions',
      image: "../../../assets/imgs/blog-slider3.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      url: 'url_to_blog',
      readingTime: '30 Min',
      categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
    },
  ];

  filteredBlogs: Blog[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredBlogs = [...this.blogs];
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    this.filteredBlogs = this.blogs.filter(blog => blog.categories.includes(category));  }

  onSlideChange() {
    console.log('slide change');
  }
}
