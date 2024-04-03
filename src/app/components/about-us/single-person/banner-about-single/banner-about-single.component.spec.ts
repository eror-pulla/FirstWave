import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAboutSingleComponent } from './banner-about-single.component';

describe('BannerAboutSingleComponent', () => {
  let component: BannerAboutSingleComponent;
  let fixture: ComponentFixture<BannerAboutSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAboutSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAboutSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
