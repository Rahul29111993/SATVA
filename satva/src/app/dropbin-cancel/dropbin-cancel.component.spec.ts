import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropbinCancelComponent } from './dropbin-cancel.component';

describe('DropbinCancelComponent', () => {
  let component: DropbinCancelComponent;
  let fixture: ComponentFixture<DropbinCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropbinCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropbinCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
