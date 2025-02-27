import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageControlComponent } from './error-message-control.component';

describe('ErrorMessageControlComponent', () => {
  let component: ErrorMessageControlComponent;
  let fixture: ComponentFixture<ErrorMessageControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorMessageControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMessageControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
