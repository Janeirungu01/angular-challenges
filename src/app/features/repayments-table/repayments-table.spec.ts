import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentsTable } from './repayments-table';

describe('RepaymentsTable', () => {
  let component: RepaymentsTable;
  let fixture: ComponentFixture<RepaymentsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepaymentsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepaymentsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
