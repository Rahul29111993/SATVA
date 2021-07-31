import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropbinSuccessComponent } from './dropbin-success.component';

describe('DropbinSuccessComponent', () => {
  let component: DropbinSuccessComponent;
  let fixture: ComponentFixture<DropbinSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropbinSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropbinSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
