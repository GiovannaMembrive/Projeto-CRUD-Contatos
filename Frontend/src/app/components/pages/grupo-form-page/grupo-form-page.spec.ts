import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoFormPage } from './grupo-form-page';

describe('GrupoFormPage', () => {
  let component: GrupoFormPage;
  let fixture: ComponentFixture<GrupoFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
