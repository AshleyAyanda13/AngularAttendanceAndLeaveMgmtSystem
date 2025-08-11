import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceLogsPageComponent } from './attendance-logs-page.component';

describe('AttendanceLogsPageComponent', () => {
  let component: AttendanceLogsPageComponent;
  let fixture: ComponentFixture<AttendanceLogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceLogsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
