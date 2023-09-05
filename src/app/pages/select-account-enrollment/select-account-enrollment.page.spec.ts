import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAccountEnrollmentPage } from './select-account-enrollment.page';

describe('SelectAccountEnrollmentPage', () => {
  let component: SelectAccountEnrollmentPage;
  let fixture: ComponentFixture<SelectAccountEnrollmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectAccountEnrollmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
