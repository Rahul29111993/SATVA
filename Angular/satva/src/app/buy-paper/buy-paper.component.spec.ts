import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPaperComponent } from './buy-paper.component';

describe('BuyPaperComponent', () => {
  let component: BuyPaperComponent;
  let fixture: ComponentFixture<BuyPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
