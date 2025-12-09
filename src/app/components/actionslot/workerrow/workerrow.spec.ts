import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workerrow } from './workerrow';

describe('Workerrow', () => {
  let component: Workerrow;
  let fixture: ComponentFixture<Workerrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workerrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Workerrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
