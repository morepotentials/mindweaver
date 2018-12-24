import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrommeComponent } from './fromme.component';

describe('FrommeComponent', () => {
  let component: FrommeComponent;
  let fixture: ComponentFixture<FrommeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrommeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
