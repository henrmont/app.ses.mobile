import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileIndexPage } from './profile-index.page';

describe('ProfileIndexPage', () => {
  let component: ProfileIndexPage;
  let fixture: ComponentFixture<ProfileIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
