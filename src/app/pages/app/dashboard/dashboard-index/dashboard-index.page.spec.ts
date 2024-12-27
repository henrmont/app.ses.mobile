import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardIndexPage } from './dashboard-index.page';

describe('DashboardIndexPage', () => {
  let component: DashboardIndexPage;
  let fixture: ComponentFixture<DashboardIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
