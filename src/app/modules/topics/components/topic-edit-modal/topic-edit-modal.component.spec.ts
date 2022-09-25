import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicEditModalComponent } from './topic-edit-modal.component';

describe('TopicEditModalComponent', () => {
  let component: TopicEditModalComponent;
  let fixture: ComponentFixture<TopicEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
