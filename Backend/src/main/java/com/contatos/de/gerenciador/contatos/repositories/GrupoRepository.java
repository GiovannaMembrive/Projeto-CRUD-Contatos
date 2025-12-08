package com.contatos.de.gerenciador.contatos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.contatos.de.gerenciador.contatos.entities.Grupo;

public interface GrupoRepository extends JpaRepository<Grupo, Long>{
    
}
