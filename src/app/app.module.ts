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
import { ModalComponent } from './components/global/modal/modal.component';
import { TestimonialComponent } from './components/homepage/testimonial/testimonial.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BlogBannerComponent } from './components/blog/blog-banner/blog-banner.component';
import { SingleBlogComponent } from './components/blog/single-blog/single-blog.component';
import { BannerSingleComponent } from './components/blog/single-blog/banner-single/banner-single.component';
import { InfoSingleComponent } from './components/blog/single-blog/info-single/info-single.component';
import { HeroComponent } from './components/about-us/hero/hero.component';
import { LocationsComponent } from './components/about-us/locations/locations.component';
import { ProductsComponent } from './components/about-us/products/products.component';
import { OurStoryComponent } from './components/about-us/our-story/our-story.component';
import { TeamComponent } from './components/about-us/team/team.component';
import { ModalContactComponent } from './components/about-us/modal-contact/modal-contact.component';
import { ContactComponent } from './components/about-us/contact/contact.component';

import { SinglePersonComponent } from './components/about-us/single-person/single-person.component';
import { ContentComponent } from './components/about-us/single-person/content/content.component';
import { QuoteComponent } from './components/about-us/single-person/quote/quote.component';
import { BannerAboutSingleComponent } from './components/about-us/single-person/banner-about-single/banner-about-single.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

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
    ModalComponent,
    TestimonialComponent,
    BlogBannerComponent,
    SingleBlogComponent,
    BannerSingleComponent,
    InfoSingleComponent,
    HeroComponent,
    LocationsComponent,
    ProductsComponent,
    OurStoryComponent,
    TeamComponent,
    ModalContactComponent,
    ContactComponent,
    SinglePersonComponent,
    ContentComponent,
    QuoteComponent,
    BannerAboutSingleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule

  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
