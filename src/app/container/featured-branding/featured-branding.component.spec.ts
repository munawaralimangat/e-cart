import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBrandingComponent } from './featured-branding.component';

describe('FeaturedBrandingComponent', () => {
  let component: FeaturedBrandingComponent;
  let fixture: ComponentFixture<FeaturedBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBrandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
