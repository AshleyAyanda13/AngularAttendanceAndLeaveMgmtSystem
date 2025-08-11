import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveRequestsComponent } from './edit-leave-requests.component';

describe('EditLeaveRequestsComponent', () => {
  let component: EditLeaveRequestsComponent;
  let fixture: ComponentFixture<EditLeaveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLeaveRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
