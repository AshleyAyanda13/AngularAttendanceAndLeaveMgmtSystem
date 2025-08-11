import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondToLeaveRequestPageComponent } from './respond-to-leave-request-page.component';

describe('RespondToLeaveRequestPageComponent', () => {
  let component: RespondToLeaveRequestPageComponent;
  let fixture: ComponentFixture<RespondToLeaveRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespondToLeaveRequestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondToLeaveRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
