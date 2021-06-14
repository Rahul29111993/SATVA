import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropbinComponent } from './dropbin.component';

describe('DropbinComponent', () => {
  let component: DropbinComponent;
  let fixture: ComponentFixture<DropbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropbinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
