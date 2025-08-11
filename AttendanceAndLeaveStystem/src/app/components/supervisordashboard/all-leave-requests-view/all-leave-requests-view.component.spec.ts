import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveRequestsViewComponent } from './all-leave-requests-view.component';

describe('AllLeaveRequestsViewComponent', () => {
  let component: AllLeaveRequestsViewComponent;
  let fixture: ComponentFixture<AllLeaveRequestsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLeaveRequestsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeaveRequestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
