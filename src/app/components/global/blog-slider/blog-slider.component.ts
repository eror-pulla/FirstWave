import { Component, Input, ViewEncapsulation, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import SwiperCore, { Navigation, Swiper, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation]);

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  // url: string;
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
  blogs: Blog[] = [];


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
  // blogs: Blog[] = [
  //   { 
  //     title: 'Reasoning Ability',
  //     image: "../../../assets/imgs/blog-slider1.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Blogs', 'Webinars']    
  //   },
  //   { 
  //     title: 'Personality Assessment',
  //     image: "../../../assets/imgs/blog-slider2.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Blogs', 'Podcasts', 'Webinars']    
  //   },
  //   { 
  //     title: 'Cope Inventory',
  //     image: "../../../assets/imgs/blog-slider3.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Blogs', 'White Papers', 'Case Studies']
  //   },
  //   { 
  //     title: 'Entrepreneurial Personality',
  //     image: "../../../assets/imgs/blog-slider1.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Blogs', 'Enterprise']
  //   },
  //   { 
  //     title: 'Enterprise Functions',
  //     image: "../../../assets/imgs/blog-slider2.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
  //   },
  //   { 
  //     title: 'Personality Assessment',
  //     image: "../../../assets/imgs/blog-slider1.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Blogs', 'Podcasts', 'Webinars']    
  //   },
  //   { 
  //     title: 'Cope Inventory',
  //     image: "../../../assets/imgs/blog-slider3.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Blogs', 'White Papers', 'Case Studies']
  //   },
  //   { 
  //     title: 'Enterprise Functions',
  //     image: "../../../assets/imgs/blog-slider2.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
  //   },
  //   { 
  //     title: 'Enterprise Functions',
  //     image: "../../../assets/imgs/blog-slider3.svg",
  //     description: 'Discover the top traits that help you excel and determine your work fit.',
  //     url: 'url_to_blog',
  //     readingTime: '30 Min',
  //     categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
  //   },
  // ];
  populateBlogs() {
    this.blogs.push(
      { 
        id:'1',
        title: 'Reasoning Ability',
        image: "blog-slider1.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Webinars']    
      },
      { 
        id:'2',
        title: 'Personality Assessment',
        image: "blog-slider2.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Podcasts', 'Webinars']    
      },
      { 
        id:'3',

        title: 'Cope Inventory',
        image: "blog-slider3.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'White Papers', 'Case Studies']
      },
      { 
        id:'4',
        title: 'Entrepreneurial Personality',
        image: "blog-slider1.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Enterprise']
      },
      { 
        id:'5',
        title: 'Enterprise Functions',
        image: "blog-slider2.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
      },
      { 
        id:'6',
        title: 'Personality Assessment',
        image: "blog-slider1.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'Podcasts', 'Webinars']    
      },
      { 
        id:'7',
        title: 'Cope Inventory',
        image: "blog-slider3.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Blogs', 'White Papers', 'Case Studies']
      },
      { 
        id:'8',
        title: 'Enterprise Functions',
        image: "blog-slider2.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
      },
      { 
        id:'9',
        title: 'Enterprise Functions',
        image: "blog-slider3.svg",
        description: 'Discover the top traits that help you excel and determine your work fit.',
        readingTime: '30 Min',
        categories: ['Enterprise', 'Case Studies' , 'Podcasts' ]
      },
    );
  }
  
  filteredBlogs: Blog[] = [];
  
  // navigateToBlog(id: string) {
  //   this.router.navigate(['/blog', id]);
  // }
  constructor() { }

  ngOnInit(): void {
    this.populateBlogs();
    this.filteredBlogs = [...this.blogs];
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    this.filteredBlogs = this.blogs.filter(blog => blog.categories.includes(category));  }

  onSlideChange() {
    console.log('slide change');
  }
}
