import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Grupo } from '../../../models/grupo';
import { GrupoService } from '../../../services/grupo-service';

@Component({
  selector: 'app-grupo-form-page',
  standalone: false,
  templateUrl: './grupo-form-page.html',
  styleUrl: './grupo-form-page.css',
})
export class GrupoFormPage implements OnInit {

  formGroupGrupo!: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private grupoService: GrupoService
  ) {}

  ngOnInit() {
    this.formGroupGrupo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  save() {
    if (this.formGroupGrupo.invalid) {
      this.formGroupGrupo.markAllAsTouched();
      return;
    }

    this.loading = true;

    const grupo: Grupo = this.formGroupGrupo.value;

    this.grupoService.create(grupo).subscribe({
      next: () => {
        alert('Grupo criado com sucesso!');
        this.formGroupGrupo.reset();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao criar grupo', err);
        alert('Erro ao salvar grupo.');
        this.loading = false;
      }
    });
  }
}
