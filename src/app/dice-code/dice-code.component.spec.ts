import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceCodeComponent } from './dice-code.component';

describe('DiceCodeComponent', () => {
  let component: DiceCodeComponent;
  let fixture: ComponentFixture<DiceCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
