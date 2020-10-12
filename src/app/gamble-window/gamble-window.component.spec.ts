import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GambleWindowComponent } from './gamble-window.component';

describe('GambleWindowComponent', () => {
  let component: GambleWindowComponent;
  let fixture: ComponentFixture<GambleWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GambleWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GambleWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
