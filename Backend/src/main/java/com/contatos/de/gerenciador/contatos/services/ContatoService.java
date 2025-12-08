package com.contatos.de.gerenciador.contatos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contatos.de.gerenciador.contatos.dtos.ContatoRequest;
import com.contatos.de.gerenciador.contatos.dtos.ContatoResponse;
import com.contatos.de.gerenciador.contatos.entities.Contato;
import com.contatos.de.gerenciador.contatos.mappers.ContatoMapper;
import com.contatos.de.gerenciador.contatos.repositories.ContatoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ContatoService {
    
    @Autowired
    private ContatoRepository repository;

    public List<ContatoResponse> getContatos(){
        return repository.findAll()
        .stream()
        .map(ContatoMapper::toDTO)
        .toList();
    }

    public ContatoResponse getContatoById(long id) {
        return repository.findById(id)
                        .map(ContatoMapper::toDTO)
                        .orElseThrow( ()-> new EntityNotFoundException("Contato não cadastrado"));
    }

    public void deleteContatoById(long id){
	    if(repository.existsById(id))
			repository.deleteById(id);
		else
			throw new EntityNotFoundException("Contato não existe");

    }

    public ContatoResponse saveContato(ContatoRequest request){
        Contato contato = ContatoMapper.toEntity(request);
        Contato savedContato = repository.save(contato);
        return ContatoMapper.toDTO(savedContato);
   }

   public void updateContato(ContatoRequest request, long id)
    {
        Contato aux = repository.getReferenceById(id);
        aux.setName(request.name());
        aux.setPhone(request.phone());
        aux.setEmail(request.email());
        aux.setAdress(request.adress());
        aux.setDescription(request.description());

        repository.save(aux);
    }
}
