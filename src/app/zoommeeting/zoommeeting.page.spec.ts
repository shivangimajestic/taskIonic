import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZoommeetingPage } from './zoommeeting.page';

describe('ZoommeetingPage', () => {
  let component: ZoommeetingPage;
  let fixture: ComponentFixture<ZoommeetingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZoommeetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
