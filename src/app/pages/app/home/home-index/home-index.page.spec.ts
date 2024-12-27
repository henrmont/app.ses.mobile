import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeIndexPage } from './home-index.page';

describe('HomeIndexPage', () => {
  let component: HomeIndexPage;
  let fixture: ComponentFixture<HomeIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
