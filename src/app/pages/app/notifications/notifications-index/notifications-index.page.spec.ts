import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsIndexPage } from './notifications-index.page';

describe('NotificationsIndexPage', () => {
  let component: NotificationsIndexPage;
  let fixture: ComponentFixture<NotificationsIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
