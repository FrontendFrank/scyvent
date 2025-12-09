import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actionslot } from './actionslot';

describe('Actionslot', () => {
  let component: Actionslot;
  let fixture: ComponentFixture<Actionslot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actionslot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actionslot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
