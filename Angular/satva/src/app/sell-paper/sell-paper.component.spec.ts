import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPaperComponent } from './sell-paper.component';

describe('SellPaperComponent', () => {
  let component: SellPaperComponent;
  let fixture: ComponentFixture<SellPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
