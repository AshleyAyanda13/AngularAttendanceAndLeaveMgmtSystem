import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeaveRequestsPageComponent } from './all-leave-requests-page.component';

describe('AllLeaveRequestsPageComponent', () => {
  let component: AllLeaveRequestsPageComponent;
  let fixture: ComponentFixture<AllLeaveRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLeaveRequestsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLeaveRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
