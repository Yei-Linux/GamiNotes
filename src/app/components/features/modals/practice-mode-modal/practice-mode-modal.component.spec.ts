import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeModeModalComponent } from './practice-mode-modal.component';

describe('PracticeModeModalComponent', () => {
  let component: PracticeModeModalComponent;
  let fixture: ComponentFixture<PracticeModeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeModeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeModeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
