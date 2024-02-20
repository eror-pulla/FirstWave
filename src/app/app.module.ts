import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ModalComponent } from './components/modal/modal.component';
import { BlogSliderComponent } from './components/blog-slider/blog-slider.component';
import { BannerComponent } from './components/homepage/banner/banner.component';
import { ProjectDetailsComponent } from './components/homepage/project-details/project-details.component';
import { ServicesComponent } from './components/homepage/services/services.component';
import { AdvertComponent } from './components/homepage/advert/advert.component';
import { TestimonialComponent } from './components/homepage/testimonial/testimonial.component';

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
    ModalComponent,
    BlogSliderComponent,
    BannerComponent,
    ProjectDetailsComponent,
    ServicesComponent,
    AdvertComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
