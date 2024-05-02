import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveMinutesComponent } from './two-minutes.component';

describe('FiveMinutesComponent', () => {
  let component: FiveMinutesComponent;
  let fixture: ComponentFixture<FiveMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveMinutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiveMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
