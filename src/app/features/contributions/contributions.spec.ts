import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contributions } from './contributions';

describe('Contributions', () => {
  let component: Contributions;
  let fixture: ComponentFixture<Contributions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contributions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contributions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
