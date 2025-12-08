package com.contatos.de.gerenciador.contatos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contatos.de.gerenciador.contatos.dtos.GrupoRequest;
import com.contatos.de.gerenciador.contatos.dtos.GrupoResponse;
import com.contatos.de.gerenciador.contatos.entities.Grupo;
import com.contatos.de.gerenciador.contatos.mappers.GrupoMapper;
import com.contatos.de.gerenciador.contatos.repositories.GrupoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class GrupoService {
    
    @Autowired
    private GrupoRepository repository;

    public List<GrupoResponse> getGrupos(){
        return repository.findAll()
                .stream()
                .map(GrupoMapper::toDTO)
                .toList();
    }

    public GrupoResponse getGrupoById(long id) {
        return repository.findById(id)
                        .map(GrupoMapper::toDTO)
                        .orElseThrow( ()-> new EntityNotFoundException("Grupo não cadastrado"));
    }

    public void deleteGrupoById(long id){
	    if(repository.existsById(id))
			repository.deleteById(id);
		else
			throw new EntityNotFoundException("TGrupo não existe");

    }

    public GrupoResponse saveGrupo(GrupoRequest request){
        Grupo grupo = GrupoMapper.toEntity(request);
        Grupo savedGrupo = repository.save(grupo);
        return GrupoMapper.toDTO(savedGrupo);
   }

   public void updateGrupo(GrupoRequest request, long id)
    {
        Grupo aux = repository.getReferenceById(id);
        aux.setName(request.name());

        repository.save(aux);
    }
}
