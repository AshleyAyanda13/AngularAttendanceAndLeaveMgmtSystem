import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNotFoundPageComponent } from './route-not-found-page.component';

describe('RouteNotFoundPageComponent', () => {
  let component: RouteNotFoundPageComponent;
  let fixture: ComponentFixture<RouteNotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteNotFoundPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
