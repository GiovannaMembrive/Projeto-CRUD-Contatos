import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Grupo } from '../../../models/grupo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrupoService } from '../../../services/grupo-service';

@Component({
  selector: 'app-grupo-edit-modal',
  standalone: false,
  templateUrl: './grupo-edit-modal.html',
  styleUrl: './grupo-edit-modal.css'
})
export class GrupoEditModal {

  @Input() grupo!: Grupo;
  @Output() close = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private grupoService: GrupoService
  ) {
    this.form = fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form.patchValue(this.grupo);
  }

  salvar() {
    this.grupoService.update(this.grupo.id!, this.form.value).subscribe({
      next: () => this.close.emit(true),
      error: err => console.error("Erro ao editar grupo", err)
    });
  }

  fechar() {
    this.close.emit(false);
  }
}
