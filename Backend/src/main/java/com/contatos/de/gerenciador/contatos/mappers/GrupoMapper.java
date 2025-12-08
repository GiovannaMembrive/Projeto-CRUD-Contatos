package com.contatos.de.gerenciador.contatos.mappers;

import com.contatos.de.gerenciador.contatos.dtos.GrupoRequest;
import com.contatos.de.gerenciador.contatos.dtos.GrupoResponse;
import com.contatos.de.gerenciador.contatos.entities.Grupo;

public class GrupoMapper {
    public static Grupo toEntity(GrupoRequest request){
        Grupo p = new Grupo();
        p.setName(request.name());
        return p;
    }

    public static GrupoResponse toDTO(Grupo grupo){
        return new GrupoResponse(
            grupo.getId(),
            grupo.getName()
        );
    }
}
