import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private apiUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  getById(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrl}/${id}`);
  }

  create(contato: Contato): Observable<Contato> {
    const request = {
      name: contato.name,
      phone: contato.phone,
      email: contato.email,
      adress: contato.adress,
      description: contato.description,
      grupo: contato.grupo ? { id: contato.grupo.id } : null
    };

    return this.http.post<Contato>(this.apiUrl, request);
  }

  update(id: number, contato: Contato): Observable<Contato> {
    const request = {
      name: contato.name,
      phone: contato.phone,
      email: contato.email,
      adress: contato.adress,
      description: contato.description,
      grupo: contato.grupo
        ? { id: contato.grupo.id }
        : null
    };

    return this.http.put<Contato>(`${this.apiUrl}/${id}`, request);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getByGrupoId(grupoId: number): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.apiUrl}/grupo/${grupoId}`);
  }
}
