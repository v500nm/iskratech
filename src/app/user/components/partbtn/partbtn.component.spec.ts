import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartbtnComponent } from './partbtn.component';

describe('PartbtnComponent', () => {
  let component: PartbtnComponent;
  let fixture: ComponentFixture<PartbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
