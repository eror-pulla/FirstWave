import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SingleBlogComponent } from './components/blog/single-blog/single-blog.component';
import { SinglePersonComponent } from './components/about-us/single-person/single-person.component';



const routes: Routes = [
  {
    path:'', component: HomepageComponent
  },
  {
  path:'blog', component: BlogComponent ,
  },
  {
    path: 'blog/:id', component: SingleBlogComponent ,
  },
  {
    path:'about-us', component: AboutUsComponent
  },
  {
    path:'about-us/person/:id', component: SinglePersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
