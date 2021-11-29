--Utilizando Banco de Dados Roman
USE Roman;
GO

SELECT * FROM Usuario
SELECT * FROM TipoUsuario
SELECT * FROM Equipe
SELECT * FROM Tema
SELECT * FROM Projeto

--Usuario e Tipo de Usuario
SELECT IdUsuario,Email,TipoUsuario
FROM Usuario
INNER JOIN TipoUsuario
ON Usuario.IdTipoUsuario = TipoUsuario.IdTipoUsuario

SELECT NomeProjeto,Descricao,NomeTema
FROM Projeto
INNER JOIN Tema
ON Projeto.IdTema = Tema.IdTema

