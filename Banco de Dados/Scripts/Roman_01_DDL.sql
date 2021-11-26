--Criação Banco de Dados Roman
CREATE DATABASE Roman;
GO

--Utilizando Banco de Dados Roman
USE Roman;
GO

--Criação Tabela Tipo de Usuário
CREATE TABLE TipoUsuario(
IdTipoUsuario INT PRIMARY KEY IDENTITY(1,1),
TipoUsuario VARCHAR(20) NOT NULL UNIQUE
);
GO

--Criação Tabela Equipe
CREATE TABLE Equipe(
IdEquipe INT PRIMARY KEY IDENTITY(1,1),
NomeEquipe VARCHAR(20) NOT NULL UNIQUE
);
GO

--Criação Tabela Usuario
CREATE TABLE Usuario(
IdUsuario INT PRIMARY KEY IDENTITY(1,1),
Nome VARCHAR(50) NOT NULL,
Email VARCHAR(80) NOT NULL UNIQUE,
Senha VARCHAR(50) NOT NULL CHECK(len(Senha)>=3),
IdTipoUsuario INT FOREIGN KEY REFERENCES TipoUsuario(IdTipoUsuario),
IdEquipe INT FOREIGN KEY REFERENCES Equipe(IdEquipe)
);
GO

--Criação Tabela Tema
CREATE TABLE Tema(
IdTema INT PRIMARY KEY IDENTITY(1,1),
NomeTema VARCHAR(30) NOT NULL UNIQUE,
[Status] BIT DEFAULT (0)
);
GO

--Criação Tabela Projeto
CREATE TABLE Projeto(
IdProjeto INT PRIMARY KEY IDENTITY(1,1),
NomeProjeto VARCHAR(30) NOT NULL,
Descricao TEXT NOT NULL,
IdTema INT FOREIGN KEY REFERENCES Tema(IdTema)
);
GO
