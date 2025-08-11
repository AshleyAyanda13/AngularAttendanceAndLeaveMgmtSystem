import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeeDetailsformComponent } from './editemployee-detailsform.component';

describe('EditemployeeDetailsformComponent', () => {
  let component: EditemployeeDetailsformComponent;
  let fixture: ComponentFixture<EditemployeeDetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditemployeeDetailsformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditemployeeDetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
