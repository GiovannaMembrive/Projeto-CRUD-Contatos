import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEditModal } from './grupo-edit-modal';

describe('GrupoEditModal', () => {
  let component: GrupoEditModal;
  let fixture: ComponentFixture<GrupoEditModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoEditModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoEditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
