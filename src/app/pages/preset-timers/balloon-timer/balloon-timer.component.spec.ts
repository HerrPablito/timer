import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonTimerComponent } from './balloon-timer.component';

describe('BalloonTimerComponent', () => {
  let component: BalloonTimerComponent;
  let fixture: ComponentFixture<BalloonTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalloonTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalloonTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
