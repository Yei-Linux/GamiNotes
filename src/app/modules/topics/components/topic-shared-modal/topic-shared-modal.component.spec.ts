import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicShareModalComponent } from './topic-shared-modal.component';

describe('TopicShareModalComponent', () => {
  let component: TopicShareModalComponent;
  let fixture: ComponentFixture<TopicShareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicShareModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
