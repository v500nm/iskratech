import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseComponent } from './lose.component';

describe('LoseComponent', () => {
  let component: LoseComponent;
  let fixture: ComponentFixture<LoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
