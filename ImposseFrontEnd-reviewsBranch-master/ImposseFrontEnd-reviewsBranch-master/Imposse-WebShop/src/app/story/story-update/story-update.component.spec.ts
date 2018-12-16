import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUpdateComponent } from './story-update.component';

describe('StoryUpdateComponent', () => {
  let component: StoryUpdateComponent;
  let fixture: ComponentFixture<StoryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
