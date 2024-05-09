import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateInformationPage } from './create-information.page';

describe('CreateInformationPage', () => {
  let component: CreateInformationPage;
  let fixture: ComponentFixture<CreateInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
