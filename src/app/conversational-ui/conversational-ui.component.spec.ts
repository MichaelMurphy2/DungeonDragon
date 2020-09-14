import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationalUIComponent } from './conversational-ui.component';

describe('ConversationalUIComponent', () => {
  let component: ConversationalUIComponent;
  let fixture: ComponentFixture<ConversationalUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationalUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationalUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
