-- Grupos
INSERT INTO TBL_GRUPO (NAME) VALUES ('Família');
INSERT INTO TBL_GRUPO (NAME) VALUES ('Trabalho');
INSERT INTO TBL_GRUPO (NAME) VALUES ('Amigos');
INSERT INTO TBL_GRUPO (NAME) VALUES ('Escola');

-- Contatos
INSERT INTO TBL_CONTATOS (NAME, PHONE, EMAIL, ADRESS, DESCRIPTION, GRUPO_ID)
VALUES ('Ana Silva', '11987654321', 'ana.silva@example.com', 'Rua das Flores 123', 'Irmã por parte de mãe', 1);

INSERT INTO TBL_CONTATOS (NAME, PHONE, EMAIL, ADRESS, DESCRIPTION, GRUPO_ID)
VALUES ('Carlos Mendes', '11999887766', 'carlos.mendes@example.com', 'Av. Paulista 500', 'Colega da empresa', 2);

INSERT INTO TBL_CONTATOS (NAME, PHONE, EMAIL, ADRESS, DESCRIPTION, GRUPO_ID)
VALUES ('Beatriz Almeida', '11977774444', 'beatriz.almeida@example.com', 'Rua do Lago 45', 'Melhor amiga', 3);

INSERT INTO TBL_CONTATOS (NAME, PHONE, EMAIL, ADRESS, DESCRIPTION, GRUPO_ID)
VALUES ('Marcos Couto', '11966665555', 'marcos.couto@example.com', 'Rua Central 78', 'Colega da faculdade', 4);
