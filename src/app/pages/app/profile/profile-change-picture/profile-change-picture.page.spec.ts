import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileChangePicturePage } from './profile-change-picture.page';

describe('ProfileChangePicturePage', () => {
  let component: ProfileChangePicturePage;
  let fixture: ComponentFixture<ProfileChangePicturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChangePicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
