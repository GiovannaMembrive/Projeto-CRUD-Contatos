import { Component, OnInit } from '@angular/core';
import { Contato } from '../../../models/contato';
import { Grupo } from '../../../models/grupo';
import { ContatoService } from '../../../services/contato-service';
import { GrupoService } from '../../../services/grupo-service';

@Component({
  selector: 'app-contato-page',
  standalone: false,
  templateUrl: './contato-page.html',
  styleUrl: './contato-page.css',
})
export class ContatoPage implements OnInit {

  contatos: Contato[] = [];
  contatosFiltrados: Contato[] = [];
  searchTerm: string = '';
  grupos: Grupo[] = [];
  contatoSelecionado: Contato | null = null;

  constructor(
    private contatoService: ContatoService,
    private grupoService: GrupoService 
  ) {}

  ngOnInit(): void {
    this.loadContatos();
    this.loadGrupos();
  }

  filtrar() {
  const term = this.searchTerm.toLowerCase().trim();

  this.contatosFiltrados = this.contatos.filter(c =>
    c.name.toLowerCase().includes(term)
  );
  }

  loadContatos() {
  this.contatoService.getAll().subscribe({
    next: (data) => {
      this.contatos = data;
      this.filtrar(); // aplica o filtro quando carrega
    },
    error: (err) => console.error('Erro ao carregar contatos', err)
  });
  }

  loadGrupos() {
    this.grupoService.getAll().subscribe({
      next: (data) => (this.grupos = data),
      error: (err) => console.error('Erro ao carregar grupos', err)
    });
  }

  // Abrir modal com o contato selecionado
  edit(contato: Contato) {
    this.contatoSelecionado = { ...contato }; // evita alterar antes de salvar
  }

  // Fechar modal
  closeModal(atualizar: boolean) {
    this.contatoSelecionado = null;
    if (atualizar) {
      this.loadContatos(); // atualiza lista depois de salvar edição
    }
  }

  // Excluir contato
  delete(id: number | undefined) {
    if (!id) return;

    if (confirm("Tem certeza que deseja excluir este contato?")) {
      this.contatoService.delete(id).subscribe({
        next: () => this.loadContatos(),
        error: (err) => console.error("Erro ao excluir contato", err),
      });
    }
  }
}

