import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDayAttendanceComponent } from './current-day-attendance.component';

describe('CurrentDayAttendanceComponent', () => {
  let component: CurrentDayAttendanceComponent;
  let fixture: ComponentFixture<CurrentDayAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentDayAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDayAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
