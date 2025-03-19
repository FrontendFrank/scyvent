import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HextileComponent } from './hextile.component';

describe('HextileComponent', () => {
  let component: HextileComponent;
  let fixture: ComponentFixture<HextileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HextileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HextileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
