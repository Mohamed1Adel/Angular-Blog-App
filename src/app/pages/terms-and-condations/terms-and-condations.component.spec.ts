import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndCondationsComponent } from './terms-and-condations.component';

describe('TermsAndCondationsComponent', () => {
  let component: TermsAndCondationsComponent;
  let fixture: ComponentFixture<TermsAndCondationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndCondationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndCondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
