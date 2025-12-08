package com.contatos.de.gerenciador.contatos.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.contatos.de.gerenciador.contatos.dtos.GrupoRequest;
import com.contatos.de.gerenciador.contatos.dtos.GrupoResponse;
import com.contatos.de.gerenciador.contatos.services.GrupoService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("grupos")
public class GrupoController {

    @Autowired
    private GrupoService service;

    @GetMapping
    public ResponseEntity<List<GrupoResponse>> getGrupos(){
        return ResponseEntity.ok(service.getGrupos());
    }

    @GetMapping("{id}")
    public ResponseEntity<GrupoResponse> getGrupoById(@PathVariable long id) {
        return ResponseEntity.ok(service.getGrupoById(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteGrupoById(@PathVariable long id){
        service.deleteGrupoById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<GrupoResponse> saveGrupo(@Valid @RequestBody GrupoRequest grupo)
    {
        GrupoResponse response = service.saveGrupo(grupo);
        
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(response.id())
                .toUri();
        return ResponseEntity.created(location)
                             .body(response);
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> updateGrupo(@PathVariable long id,
                                            @Valid @RequestBody GrupoRequest grupo
                                              )
    {
        service.updateGrupo(grupo, id);
        return ResponseEntity.noContent().build();
    }

}
