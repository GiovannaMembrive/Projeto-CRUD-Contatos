package com.contatos.de.gerenciador.contatos.mappers;

import com.contatos.de.gerenciador.contatos.dtos.ContatoRequest;
import com.contatos.de.gerenciador.contatos.dtos.ContatoResponse;
import com.contatos.de.gerenciador.contatos.dtos.GrupoResponse;
import com.contatos.de.gerenciador.contatos.entities.Contato;

public class ContatoMapper {

    public static Contato toEntity(ContatoRequest request){
        Contato p = new Contato();
        p.setName(request.name());
        p.setPhone(request.phone());
        p.setEmail(request.email());
        p.setAdress(request.adress());
        p.setDescription(request.description());
        // grupo será setado no service, usando request.grupoId
        return p;
    }

    public static ContatoResponse toDTO(Contato contato){
        GrupoResponse grupoResponse = null;

        if (contato.getGrupo() != null) {
            grupoResponse = new GrupoResponse(
                contato.getGrupo().getId(),
                contato.getGrupo().getName()
            );
        }

        return new ContatoResponse(
            contato.getId(),
            contato.getName(),
            contato.getPhone(),
            contato.getEmail(),
            contato.getAdress(),
            contato.getDescription(),
            grupoResponse
        );
    }
}

