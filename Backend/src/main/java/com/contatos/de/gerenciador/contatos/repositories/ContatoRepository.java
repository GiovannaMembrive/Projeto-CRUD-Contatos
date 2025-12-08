package com.contatos.de.gerenciador.contatos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.contatos.de.gerenciador.contatos.entities.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long>{
    
}
