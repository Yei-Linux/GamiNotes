import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCardnoteComponent } from './dropdown-cardnote.component';

describe('DropdownCardnoteComponent', () => {
  let component: DropdownCardnoteComponent;
  let fixture: ComponentFixture<DropdownCardnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCardnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownCardnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
