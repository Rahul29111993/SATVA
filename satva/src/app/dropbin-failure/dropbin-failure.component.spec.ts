import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropbinFailureComponent } from './dropbin-failure.component';

describe('DropbinFailureComponent', () => {
  let component: DropbinFailureComponent;
  let fixture: ComponentFixture<DropbinFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropbinFailureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropbinFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
