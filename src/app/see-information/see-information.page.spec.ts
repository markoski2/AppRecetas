import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeInformationPage } from './see-information.page';

describe('SeeInformationPage', () => {
  let component: SeeInformationPage;
  let fixture: ComponentFixture<SeeInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
