// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-single-blog',
//   templateUrl: './single-blog.component.html',
//   styleUrls: ['./single-blog.component.scss']
// })
// export class SingleBlogComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
  blogPosts: any[] = [
    { id: '1', title: 'First Blog Post', content: 'Content of the first blog post' },
    { id: '2', title: 'Second Blog Post', content: 'Content of the second blog post' }
  ];
  blogPost: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // const id = params['id'];
      const id = String(params['id']);
      this.blogPost = this.blogPosts.find(post => post.id === id); // Find the blog post by id
    });
  }
}
