import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerDialogComponent } from './expense-tracker-dialog.component';

describe('ExpenseTrackerDialogComponent', () => {
  let component: ExpenseTrackerDialogComponent;
  let fixture: ComponentFixture<ExpenseTrackerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTrackerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTrackerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
