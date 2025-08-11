import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeedetailsComponent } from './editemployeedetails.component';

describe('EditemployeedetailsComponent', () => {
  let component: EditemployeedetailsComponent;
  let fixture: ComponentFixture<EditemployeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditemployeedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
