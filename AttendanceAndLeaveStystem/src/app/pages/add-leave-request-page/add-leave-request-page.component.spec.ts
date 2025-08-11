import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveRequestPageComponent } from './add-leave-request-page.component';

describe('AddLeaveRequestPageComponent', () => {
  let component: AddLeaveRequestPageComponent;
  let fixture: ComponentFixture<AddLeaveRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLeaveRequestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
