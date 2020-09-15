import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharComponent } from './view-char.component';

describe('ViewCharComponent', () => {
  let component: ViewCharComponent;
  let fixture: ComponentFixture<ViewCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
