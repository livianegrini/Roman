--Utilizando Banco de Dados Roman
USE Roman;
GO

--Usuario e Tipo de Usuario
SELECT IdUsuario,Email,TipoUsuario
FROM Usuario
INNER JOIN TipoUsuario
ON Usuario.IdTipoUsuario = TipoUsuario.IdTipoUsuario