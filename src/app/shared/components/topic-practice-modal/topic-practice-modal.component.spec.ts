import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPracModal } from './topic-practice-modal.component';

describe('TopicPracModal', () => {
  let component: TopicPracModal;
  let fixture: ComponentFixture<TopicPracModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPracModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicPracModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
