import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPageHeaderComponent } from './topic-page-header.component';

describe('TopicPageHeaderComponent', () => {
  let component: TopicPageHeaderComponent;
  let fixture: ComponentFixture<TopicPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
