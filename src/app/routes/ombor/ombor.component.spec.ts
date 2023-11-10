import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmborComponent } from './ombor.component';

describe('OmborComponent', () => {
  let component: OmborComponent;
  let fixture: ComponentFixture<OmborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
