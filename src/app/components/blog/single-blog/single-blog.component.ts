import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SingleBlogComponent implements OnInit {
  blogId: number | undefined;
  blog: any; 
  blogs = [
    { 
      id: 1 ,
      title: 'Reasoning Ability',
      image: "blog-slider1.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Blogs', 'Webinars'],
      bigTitle:'Using Configuration Management to Detect Unwanted Software123123123',
      shortDesc:'Lorem Ipsum do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author:'by Emily Coe',
      imgBanner:'blog-single.svg' 
    },
    { 
      id:2,
      title: 'Personality Assessment',
      image: "blog-slider2.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Blogs', 'Podcasts', 'Webinars'],
      bigTitle:'Personality Assessment ipsum do eiusmod tempor ',
      shortDesc:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      author:'by Eror Ferizi',
      imgBanner:'hero-about.svg' 
       
    },
    { 
      id:3,
      title: 'Cope Inventory',
      image: "blog-slider3.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Blogs', 'White Papers', 'Case Studies'],
      bigTitle:'Cope Inventory ipsum do eiusmod tempor ',
      shortDesc:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author:'by Valdro Coe', 
      imgBanner:'unsplash.svg' 
      
    },
    { 
      id:4,
      title: 'Entrepreneurial Personality',
      image: "blog-slider1.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Blogs', 'Enterprise'],
      bigTitle:'Entrepreneurial Personality ipsum do eiusmod tempor ',
      shortDesc:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author:'by Ardit Coe', 
      imgBanner:'blog-single.svg' 
      
    },
    { 
      id:5,
      title: 'Enterprise Functions',
      image: "blog-slider2.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Enterprise', 'Case Studies' , 'Podcasts' ],
      bigTitle:'Enterprise Functions ipsum do eiusmod tempor',
      shortDesc:'Quis blandit turpis cursus in hac habitasse platea. Iaculis nunc sed augue lacus viverra vitae congue.',
      author:'by Erion Coe',  
      imgBanner:'hero-about.svg' 
     
    },
    { 
      id:6,
      title: 'Personality Assessment',
      image: "blog-slider1.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Blogs', 'Podcasts', 'Webinars'],
      bigTitle:'Discover Personality Assessment',
      shortDesc:'Lectus urna duis convallis convallis tellus id interdum velit. Nulla facilisi morbi tempus iaculis urna.',
      author:'by Gullash Coe', 
      imgBanner:'unsplash.svg' 
      
    },
    { 
      id:7,
      title: 'Cope Inventory',
      image: "blog-slider3.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Blogs', 'White Papers', 'Case Studies'],
      bigTitle:'Personality Assessment2',
      shortDesc:'Tincidunt lobortis feugiat vivamus at. Tempor orci eu lobortis elementum nibh tellus. ',
      author:'by Kushtro Coe',  
      imgBanner:'hero-about.svg' 
     
    },
    { 
      id:8,
      title: 'Enterprise Functions',
      image: "blog-slider2.svg",
      description: 'Discover the top traits that help you excel and determine your work fit.',
      readingTime: '30 Min',
      categories: ['Enterprise', 'Case Studies' , 'Podcasts' ],
      bigTitle:'Enterprise Functions 2',
      shortDesc:'Quis blandit turpis cursus in hac habitasse platea. Iaculis nunc sed augue lacus viverra vitae congue.',
      author:'by Thella Coe',  
      imgBanner:'blog-single.svg' 
     
    }
  ];
  currentCategory: string = 'Blogs';
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = +params['id'];
      this.blog = this.blogs.find(blog => blog.id === this.blogId); 
  });

  }
  get filteredBlogs(): any[] {
    return this.blogs.filter(blog => blog.categories.includes(this.currentCategory));
  }
  


}
