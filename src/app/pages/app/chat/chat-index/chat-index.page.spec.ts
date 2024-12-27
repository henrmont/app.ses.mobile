import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatIndexPage } from './chat-index.page';

describe('ChatIndexPage', () => {
  let component: ChatIndexPage;
  let fixture: ComponentFixture<ChatIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
