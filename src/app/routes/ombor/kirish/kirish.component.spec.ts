import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirishComponent } from './kirish.component';

describe('KirishComponent', () => {
  let component: KirishComponent;
  let fixture: ComponentFixture<KirishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KirishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
