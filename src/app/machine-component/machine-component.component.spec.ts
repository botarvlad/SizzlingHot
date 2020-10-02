import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineComponentComponent } from './machine-component.component';

describe('MachineComponentComponent', () => {
  let component: MachineComponentComponent;
  let fixture: ComponentFixture<MachineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
