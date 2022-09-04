import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCardstudyComponent } from './dropdown-cardstudy.component';

describe('DropdownCardstudyComponent', () => {
  let component: DropdownCardstudyComponent;
  let fixture: ComponentFixture<DropdownCardstudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCardstudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownCardstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
