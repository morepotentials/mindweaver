import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForothersComponent } from './forothers.component';

describe('ForothersComponent', () => {
  let component: ForothersComponent;
  let fixture: ComponentFixture<ForothersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForothersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
