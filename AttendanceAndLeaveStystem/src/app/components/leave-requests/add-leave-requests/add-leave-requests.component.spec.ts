import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveRequestsComponent } from './add-leave-requests.component';

describe('AddLeaveRequestsComponent', () => {
  let component: AddLeaveRequestsComponent;
  let fixture: ComponentFixture<AddLeaveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLeaveRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
