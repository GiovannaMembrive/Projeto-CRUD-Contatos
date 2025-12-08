import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../../models/grupo';
import { GrupoService } from '../../../services/grupo-service';

@Component({
  selector: 'app-grupo-page',
  standalone: false,
  templateUrl: './grupo-page.html',
  styleUrl: './grupo-page.css',
})
export class GrupoPage implements OnInit {

  grupos: Grupo[] = [];
  grupoSelecionado: Grupo | null = null;

  constructor(private grupoService: GrupoService) {}

  ngOnInit(): void {
    this.loadGrupos();
  }

  // Carregar lista
  loadGrupos() {
    this.grupoService.getAll().subscribe({
      next: (data) => this.grupos = data,
      error: (err) => console.error("Erro ao carregar grupos", err)
    });
  }

  // Abrir modal
  edit(grupo: Grupo) {
    this.grupoSelecionado = { ...grupo };
  }

  // Fechar modal
  closeModal(atualizar: boolean) {
    this.grupoSelecionado = null;

    if (atualizar) {
      this.loadGrupos();
    }
  }

  // Excluir
  delete(id: number) {
    if (confirm("Tem certeza que deseja excluir este grupo?")) {
      this.grupoService.delete(id).subscribe({
        next: () => this.loadGrupos(),
        error: (err) => console.error("Erro ao excluir grupo", err)
      });
    }
  }
}
