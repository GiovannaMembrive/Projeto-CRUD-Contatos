import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contato } from '../../../models/contato';
import { Grupo } from '../../../models/grupo';
import { ContatoService } from '../../../services/contato-service';
import { GrupoService } from '../../../services/grupo-service';

@Component({
  selector: 'app-contato-form-page',
  standalone: false,
  templateUrl: './contato-form-page.html',
  styleUrl: './contato-form-page.css',
})
export class ContatoFormPage implements OnInit {

  formGroupContato!: FormGroup;
  grupos: Grupo[] = [];
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private grupoService: GrupoService 
  ) {}

  ngOnInit() {
    this.formGroupContato = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      adress: ['', [Validators.required]],
      description: [''],
      grupo: [null, Validators.required] // recebe OBJETO Grupo
    });

    this.loadGrupos();
  }

  loadGrupos() {
    this.grupoService.getAll().subscribe({
      next: (data) => this.grupos = data,
      error: (err) => console.error('Erro ao carregar grupos', err)
    });
  }

  save() {
    if (this.formGroupContato.invalid) {
      this.formGroupContato.markAllAsTouched();
      return;
    }

    this.loading = true;

    const contato: Contato = this.formGroupContato.value;

    this.contatoService.create(contato).subscribe({
      next: () => {
        alert('Contato criado com sucesso!');
        this.formGroupContato.reset();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao salvar contato', err);
        alert('Erro ao salvar contato.');
        this.loading = false;
      }
    });
  }
}
