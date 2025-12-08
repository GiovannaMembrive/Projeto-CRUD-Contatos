import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoPage } from './contato-page';

describe('ContatoPage', () => {
  let component: ContatoPage;
  let fixture: ComponentFixture<ContatoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContatoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
