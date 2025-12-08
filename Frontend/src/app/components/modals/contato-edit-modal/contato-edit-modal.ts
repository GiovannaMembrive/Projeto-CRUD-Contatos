import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contato } from '../../../models/contato';
import { Grupo } from '../../../models/grupo';
import { ContatoService } from '../../../services/contato-service';

@Component({
  selector: 'app-contato-edit-modal',
  standalone: false,
  templateUrl: './contato-edit-modal.html',
  styleUrls: ['./contato-edit-modal.css']
})
export class ContatoEditModal {

  @Input() contato!: Contato;
  @Input() grupos: Grupo[] = [];
  @Output() closed = new EventEmitter<boolean>();

  form!: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.contato.name, Validators.required],
      phone: [this.contato.phone, Validators.required],
      email: [this.contato.email, Validators.required],
      adress: [this.contato.adress, Validators.required],
      description: [this.contato.description],
      grupo: [this.contato.grupo, Validators.required]
    });
  }

  save() {
    if (this.form.invalid) return;

    const updatedContato: Contato = {
      ...this.contato,
      ...this.form.value
    };

    this.contatoService.update(updatedContato.id!, updatedContato).subscribe({
      next: () => this.closed.emit(true),
      error: () => this.closed.emit(false)
    });
  }

  close() {
    this.closed.emit(false);
  }
}
