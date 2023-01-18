import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesComponent } from './dates.component';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
