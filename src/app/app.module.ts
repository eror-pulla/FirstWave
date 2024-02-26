import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { BrandsComponent } from './components/global/brands/brands.component';
import { BlogSliderComponent } from './components/global/blog-slider/blog-slider.component';
import { BannerComponent } from './components/homepage/banner/banner.component';
import { ProjectDetailsComponent } from './components/homepage/project-details/project-details.component';
import { ServicesComponent } from './components/homepage/services/services.component';
import { AdvertComponent } from './components/homepage/advert/advert.component';
import { TestimonialComponent } from './components/homepage/testimonial/testimonial.component';
import { ModalComponent } from './components/global/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    BrandsComponent,
    BlogSliderComponent,
    BannerComponent,
    ProjectDetailsComponent,
    ServicesComponent,
    AdvertComponent,
    TestimonialComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
