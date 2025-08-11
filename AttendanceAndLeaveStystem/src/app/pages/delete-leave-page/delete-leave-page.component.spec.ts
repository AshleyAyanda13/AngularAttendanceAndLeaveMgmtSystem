import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLeavePageComponent } from './delete-leave-page.component';

describe('DeleteLeavePageComponent', () => {
  let component: DeleteLeavePageComponent;
  let fixture: ComponentFixture<DeleteLeavePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLeavePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLeavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
