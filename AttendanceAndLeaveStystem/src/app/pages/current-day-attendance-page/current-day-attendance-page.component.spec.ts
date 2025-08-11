import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDayAttendancePageComponent } from './current-day-attendance-page.component';

describe('CurrentDayAttendancePageComponent', () => {
  let component: CurrentDayAttendancePageComponent;
  let fixture: ComponentFixture<CurrentDayAttendancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentDayAttendancePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDayAttendancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
