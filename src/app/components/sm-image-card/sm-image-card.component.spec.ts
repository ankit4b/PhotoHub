import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmImageCardComponent } from './sm-image-card.component';

describe('SmImageCardComponent', () => {
  let component: SmImageCardComponent;
  let fixture: ComponentFixture<SmImageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmImageCardComponent]
    });
    fixture = TestBed.createComponent(SmImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
