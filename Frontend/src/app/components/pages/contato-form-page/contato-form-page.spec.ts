import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoFormPage } from './contato-form-page';

describe('ContatoFormPage', () => {
  let component: ContatoFormPage;
  let fixture: ComponentFixture<ContatoFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContatoFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
