package com.contatos.de.gerenciador.contatos.dtos;

public record ContatoResponse(
    Long id,
    String name,
    String phone,
    String email,
    String adress,
    String description,
    GrupoResponse grupo
) {
    
}
