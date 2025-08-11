import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondToLeaveComponent } from './respond-to-leave.component';

describe('RespondToLeaveComponent', () => {
  let component: RespondToLeaveComponent;
  let fixture: ComponentFixture<RespondToLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespondToLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondToLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
