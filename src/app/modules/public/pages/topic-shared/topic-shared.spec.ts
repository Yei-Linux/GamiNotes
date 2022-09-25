import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSharedComponent } from './topic-shared.component';

describe('TopicSharedComponent', () => {
  let component: TopicSharedComponent;
  let fixture: ComponentFixture<TopicSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
