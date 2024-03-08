import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSingleComponent } from './info-single.component';

describe('InfoSingleComponent', () => {
  let component: InfoSingleComponent;
  let fixture: ComponentFixture<InfoSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
