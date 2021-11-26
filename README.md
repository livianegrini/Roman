Roman
O Roman é um aplicativo que consiste em um sistema de sujestões de projetos entre professores, com descrições e temáticas.

Clonar Repositódo Github
Para clonar o Repositório do GitHub você precisára verificar se a instalção de git foi feita, e se tudo estiver certo você executara o seguinte comando no terminal do Git:

git clone https://github.com/livianegrini/Roman

Criar o Banco de Dados
Para Criar o banco de dados após a clonagem do repositório para a sua máquina, você deverá abrir o SQL Server Management Studio (caso já o tenha instalado, caso contrário, o instale).

No SQL:

Adicione os arquivos:

DiretorioOndeORepositorioFoiClonado\Roman\BD\Roman_01_DDL.sql

DiretorioOndeORepositorioFoiClonado\Roman\BD\Roman_01_DML.sql

DiretorioOndeORepositorioFoiClonado\Roman\BD\Roman_01_DQL.sql

Agora, com os arquivos adicionados você deve ir no arquivo denominado DDL e clicar em Executar, assim serão criados o banco e tabelas.

Em seguida, abra o arquivo denominado DML e clique em executar, assim você irá adicionar os valores as tabelas.

Por fim, realize o mesmo processo com o arquivo DQL para ver as tabelas, deverá aparecer um modelo semelhante a este, mas com seus dados:

Id_Projeto	Id_Tema	Descricao_Projeto	Id_Usuario
1	1	Sp Medical Group	1
2	1	Gufi	2
3	2	Roman	1
4	3	WishList	1
Importar a coleção para o Postman
Primeiramente, verifique se o Postman está instalado, caso esteja, clique no botão de importar e selecione o arquivo:

DiretorioOndeORepositorioFoiClonado\Roman\Back-End\Postman\Senai_Roman_webAPI.postman_collection

O arquivo importado deve possuir a seguinta coleção:

Login:
Login
Projetos:
Projetos.Listar
Projetos.Cadastrar
Executar a API
Primeiramente acesse o arquivo RomanContext, em seguida, mude o lugar onde está escrito "options builder" para como está em seu computador, seu banco com a sua senha de acesso.

Ex: optionsBuilder.UseSqlServer("Data Source=NOTE0113F1\\SQLEXPRESS; initial catalog=Roman; user Id=sa; pwd=Senai@132;"); }

Após isso, para executar a API temos 2 opções:

Primeira: Você pode abrir o local do arquivo (DiretorioOndeORepositorioFoiClonado\Roman\Back-End\Senai_Roman_webAPI) e na parte superior onde fica a rota dele digitar cmd e depois colocar um dotnet run e dar enter.

Segunda: Abra o arquivo (DiretorioOndeORepositorioFoiClonado\Roman\Back-End\Senai_Roman_webAPI\Senai_WishList_webAPI.sln) no Visual Studio e clique em executar Senai_WishList_webAPI.

Após realizar a execução da API você já pode testar os métodos no Postman.

Rodar a Aplicação Mobile
Primeiramente instale as dependêcias do projeto e para isso você deverá acessar:

DiretorioOndeORepositorioFoiClonado\Roman\Mobile\Roman

E na parte superior digitar cmd e colocar o comando npm i ou npm instal

Após isso a aplicação pode ser executada de duas maneiras sendo elas:

Primeira: Você pode abrir o local do arquivo (DiretorioOndeORepositorioFoiClonado\Roman\Mobile\Roman) e na parte superior onde fica a rota dele digitar cmd e depois colocar um npx react-native run-android e dar enter.

Segunda: Você pode abrir o local do arquivo (DiretorioOndeORepositorioFoiClonado\Roman\Mobile\Roman) no Visual Studio Code e abrir o prompt de comando (ctrl + ') e digitar o comando npx react-native run-android.

O projeto será aberto junto do Android Studio (Verifique se já esta instalado).

Membros do Grupo e Professores:
Professores:
Nome	Username
Saulo	Saulomsantos
Lucas	Lucas Aragão Feliciano
Alunos:
Nome	Username
Gabriele Brito	
Leonardo Souza	Leonardo-Souza-de-Castro
Livia Negrini	livianegrini
