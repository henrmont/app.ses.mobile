import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoverVerificationPage } from './recover-verification.page';

describe('RecoverVerificationPage', () => {
  let component: RecoverVerificationPage;
  let fixture: ComponentFixture<RecoverVerificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
