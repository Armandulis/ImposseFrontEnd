import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUpdateComponent } from './review-update.component';

describe('ReviewUpdateComponent', () => {
  let component: ReviewUpdateComponent;
  let fixture: ComponentFixture<ReviewUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
