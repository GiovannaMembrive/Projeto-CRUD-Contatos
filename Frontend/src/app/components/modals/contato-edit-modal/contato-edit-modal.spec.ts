import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEditModal } from './contato-edit-modal';

describe('ContatoEditModal', () => {
  let component: ContatoEditModal;
  let fixture: ComponentFixture<ContatoEditModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContatoEditModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoEditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
