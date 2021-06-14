import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropbinProcessComponent } from './dropbin-process.component';

describe('DropbinProcessComponent', () => {
  let component: DropbinProcessComponent;
  let fixture: ComponentFixture<DropbinProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropbinProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropbinProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
