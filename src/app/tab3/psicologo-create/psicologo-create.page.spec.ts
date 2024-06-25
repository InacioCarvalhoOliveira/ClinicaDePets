import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsicologoCreatePage } from './psicologo-create.page';

describe('PsicologoCreatePage', () => {
  let component: PsicologoCreatePage;
  let fixture: ComponentFixture<PsicologoCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PsicologoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
