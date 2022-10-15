import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticheckboxFormComponent } from './multicheckbox-form.component';

describe('MulticheckboxFormComponent', () => {
  let component: MulticheckboxFormComponent;
  let fixture: ComponentFixture<MulticheckboxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticheckboxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticheckboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
