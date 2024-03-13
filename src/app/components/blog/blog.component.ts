import { Component, OnInit } from '@angular/core';

// interface Blog {
//   id: string;
//   title: string;
//   image: string;
//   description: string;
//   readingTime: string;
//   categories: string[];
//   bigTitle: string
// }
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  // blogs: Blog[] = [];
  // currentCategory: string = 'Blogs';
  // populateBlogs() {
  //   this.blogs.push(
  //     { 
  //       id:'1',
  //       title: 'Reasoning Ability',
  //       image: "blog-slider1.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Blogs', 'Webinars'],
  //       bigTitle:'Using Configuration Management to Detect Unwanted Software',    
  //     },
  //     { 
  //       id:'2',
  //       title: 'Personality Assessment',
  //       image: "blog-slider2.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Blogs', 'Podcasts', 'Webinars'],
  //       bigTitle:'Personality Assessment ipsum do eiusmod tempor ',   
  //     },
  //     { 
  //       id:'3',

  //       title: 'Cope Inventory',
  //       image: "blog-slider3.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Blogs', 'White Papers', 'Case Studies'],
  //       bigTitle:'Cope Inventory ipsum do eiusmod tempor ',   
  //     },
  //     { 
  //       id:'4',
  //       title: 'Entrepreneurial Personality',
  //       image: "blog-slider1.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Blogs', 'Enterprise'],
  //       bigTitle:'Entrepreneurial Personality ipsum do eiusmod tempor ',   
  //     },
  //     { 
  //       id:'5',
  //       title: 'Enterprise Functions',
  //       image: "blog-slider2.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Enterprise', 'Case Studies' , 'Podcasts' ],
  //       bigTitle:'Enterprise Functions ipsum do eiusmod tempor',   
  //     },
  //     { 
  //       id:'6',
  //       title: 'Personality Assessment',
  //       image: "blog-slider1.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Blogs', 'Podcasts', 'Webinars'],
  //       bigTitle:'',   
  //     },
  //     { 
  //       id:'7',
  //       title: 'Cope Inventory',
  //       image: "blog-slider3.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Blogs', 'White Papers', 'Case Studies'],
  //       bigTitle:'Personality Assessment2',   
  //     },
  //     { 
  //       id:'8',
  //       title: 'Enterprise Functions',
  //       image: "blog-slider2.svg",
  //       description: 'Discover the top traits that help you excel and determine your work fit.',
  //       readingTime: '30 Min',
  //       categories: ['Enterprise', 'Case Studies' , 'Podcasts' ],
  //       bigTitle:'Enterprise Functions 2',   
  //     },
  //   );
  //   this.blogDataEmitter.emit(this.blogs);
  // }

  constructor() { }

  ngOnInit(): void {
    // this.populateBlogs();
  }


  modalOpen: boolean = false;
  openModal() {
    this.modalOpen = true;
  }

}
