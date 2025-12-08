package com.contatos.de.gerenciador.contatos.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ContatoRequest(
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    String name,

    @NotBlank(message = "Phone is required")
    @Pattern(regexp = "^[0-9]{10,14}$",
             message = "Phone must contain only numbers and be between 10 and 14 digits")
    String phone,

    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    @Size(max = 100, message = "Email must be at most 100 characters")
    String email,

    @NotBlank(message = "Adress is required")
    @Size(min = 3, max = 150, message = "Adress must be between 3 and 150 characters")
    String adress,

    @Size(max = 255, message = "Description must be at most 255 characters")
    String description,
    Long grupoId
) {
    
}
