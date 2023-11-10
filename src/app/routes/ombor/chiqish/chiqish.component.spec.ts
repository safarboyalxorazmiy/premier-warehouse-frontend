import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiqishComponent } from './chiqish.component';

describe('ChiqishComponent', () => {
  let component: ChiqishComponent;
  let fixture: ComponentFixture<ChiqishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiqishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiqishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
