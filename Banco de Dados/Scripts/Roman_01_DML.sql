--Utilizando Banco de Dados Roman
USE Roman;
GO

--Selecionando Tabelas para Visualiza��o.
SELECT * FROM TipoUsuario
SELECT * FROM Equipe
SELECT * FROM Usuario
SELECT * FROM Tema
SELECT * FROM Projeto

--Inserindo Valores na Tabela TipoUsuario e Selecionando para Visualiza��o.
INSERT INTO TipoUsuario(TipoUsuario)
VALUES ('Administrador'),('Professor')
SELECT * FROM TipoUsuario

--Inserindo Valores na Tabela Equipe e Selecionando para Visualiza��o.
INSERT INTO Equipe(NomeEquipe)
VALUES ('Desenvolvimento'),('Redes'),('Multimidia')
SELECT * FROM Equipe

--Inserindo Valores na Tabela Usuario e Selecionando para Visualiza��o.
INSERT INTO Usuario(Nome,Email,Senha,IdTipoUsuario,IdEquipe)
VALUES ('Lucas','lucas@lucas.com','123',2,1),('Saulo','saulo@saulo.com','123',2,3)
SELECT * FROM Usuario

--Inserindo Valores na Tabela Usuario e Selecionando para Visualiza��o.
INSERT INTO Usuario(Nome,Email,Senha,IdTipoUsuario)
VALUES ('Jucelino','jucelino@adm.com','123',1)
SELECT * FROM Usuario

--Inserindo Valores na Tabela Tema e Selecionando para Visualiza��o.
INSERT INTO Tema(NomeTema,[Status])
VALUES ('Gest�o',1),('HQs',1),('C#',0)
SELECT * FROM Tema


SELECT * FROM Usuario
--Inserindo Valores na Tabela Projeto e Selecionando para Visualiza��o.
INSERT INTO Projeto(IdUsuario,NomeProjeto,Descricao,IdTema)
VALUES (1,'Controle de Estoque','Projeto sobre controle de estoque',1),(2,'Listagem de Personagens','Projeto sobre listagem de personagens',2)
SELECT * FROM Projeto
