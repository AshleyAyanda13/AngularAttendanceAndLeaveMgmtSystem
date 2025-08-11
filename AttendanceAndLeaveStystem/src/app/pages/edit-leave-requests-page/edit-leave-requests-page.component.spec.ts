import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveRequestsPageComponent } from './edit-leave-requests-page.component';

describe('EditLeaveRequestsPageComponent', () => {
  let component: EditLeaveRequestsPageComponent;
  let fixture: ComponentFixture<EditLeaveRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLeaveRequestsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLeaveRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
