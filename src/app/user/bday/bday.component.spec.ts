import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayComponent } from './bday.component';

describe('BdayComponent', () => {
  let component: BdayComponent;
  let fixture: ComponentFixture<BdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
