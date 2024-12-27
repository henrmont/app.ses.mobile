import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppsIndexPage } from './apps-index.page';

describe('AppsIndexPage', () => {
  let component: AppsIndexPage;
  let fixture: ComponentFixture<AppsIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
