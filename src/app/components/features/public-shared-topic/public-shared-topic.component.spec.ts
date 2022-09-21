import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSharedTopicComponent } from './public-shared-topic.component';

describe('PublicSharedTopicComponent', () => {
  let component: PublicSharedTopicComponent;
  let fixture: ComponentFixture<PublicSharedTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSharedTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSharedTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
