
Grupo 10:

Igor Lovatto - n° USP: 10439099

Leonardo Vinicius de Almeida - n° USP: 10392230

Nathielle Pereira - n° USP: 10390252

Stéfane Tame Monteiro Oliveira - n° USP: 10829970


Project Milestone 1: Store Mockups 
==================================

1.  **Requisitos**

    Para projetar as principais telas do sistema da loja online foi
utilizado o site [https://www.figma.com](https://www.google.com/url?q=https://www.figma.com/&sa=D&source=editors&ust=1622588529324000&usg=AOvVaw0_sGHTH0xBkSHC4Sp0VXfy)
onde pudemos fazer o layout com facilidade e idealizar o
site. Para implementar o HTML e CSS de pelo menos três telas, tivemos auxílio
de um plugin chamado Figma to HTML, mas tivemos que fazer muitas
alterações para chegar no que esperávamos.

**OLD:  Para abrir as paginas mockups em html, por favor utilizem a extensão LiveServerr no editor de texto Visual Code

2.  **Descrição do Projeto**

    O produto escolhido para nossa loja online serão os óculos. Com isso,
foi criada uma página principal para apresentar os principais produtos
para gerar o interesse do cliente em comprar. A partir dela, tem a opção
de criar cadastros para os clientes, buscar produtos e ver todas as
categorias disponíveis de óculos no site.

O sistema está dividido em duas classes de acesso, sendo elas:

-   Cliente: permite fazer compras de itens na loja e criação de
    cadastros
-   Administrador: permite gerenciar e cadastrar novos itens na base de
    dados da loja

        Para efetuar a compra de um produto, o cliente deve entrar no
seu cadastro, adicionar os produtos no seu carrinho, ir no perfil para
efetuar a compra, preencher seus dados e enviar.

        A funcionalidade escolhida para o site será a experimentação de
óculos pelo próprio perfil do cliente, onde o mesmo deve cadastrar sua
foto e escolher algum óculos em seu carrinho, que automaticamente o
sistema simulará que a foto do cliente esteja com o óculos escolhido.

        Segue abaixo o diagrama de navegação das páginas principais do
site da loja online:

![alt text](group-10-online-store-main/images/diagrama_navegacao.jpg)

Figura 1: Diagrama de navegação da loja online

2.1 Páginas da loja

        A páginas geradas no figma foram:

-   Página Principal: o usuário tem acesso ao campo de busca da loja; ao
    login e cadastro de usuários; à belas fotos para chamar atenção dos
    clientes; ao menu lateral de categorias de itens; e, por fim, a
    vitrine de itens mais vendidos.
-   Página de Login: o usuário insere seus dados pessoais para acesso à
    plataforma.
-   Página do Administrador: o administrador, após o login, pode
    gerenciar e cadastrar novos itens na base de dados do sistema por
    meio de um formulário, além de exibir os dados do usuário
    administrador.
-   Página do Cliente: o usuário, após o login, pode acessar seu
    carrinho de compras; confirmar compra de itens; e fazer upload de
    uma foto para teste do óculos. Além disso, a página exibe os dados
    cadastrados do usuário.
-   Página dos Produtos: são listados os produtos a partir dos filtros
    utilizados pelo usuário, sendo eles fornecidos pelo campo de busca
    ou menu lateral de categorias.
-   Página de Venda: o usuário, após confirmar os itens desejados no
    carrinho, insere os dados relacionados ao cartão de crédito
    utilizado no pagamento e realiza a confirmação da compra.

Link do figma:

https://www.figma.com/file/8u2Yh7larxHW23YDWWXqId/Trabalho-WEB?node-id=0%3A1

![alt text](group-10-online-store-main/images/pagina_principal.png)

Figura 2: Página Principal

![alt text](group-10-online-store-main/images/pagina_login.png)

Figura 3: Página de Login

![alt text](group-10-online-store-main/images/pagina_perfil_admin.png)

Figura 4: Página do Administrador

![alt text](group-10-online-store-main/images/pagina_perfil_cliente.png)

Figura 5: Página do Cliente

![alt text](group-10-online-store-main/images/pagina_produtos.png)

Figura 6: Página de Listagem dos Produtos

![alt text](group-10-online-store-main/images/pagina_vendas.png)

Figura 7: Página de Pagamento

3.  **Comentários sobre o Código**

    Após seguir os critérios de compilação para a execução do servidor, o site http://localhost:8000/ permite ter acesso de uma forma geral das páginas da loja online de óculos.  
    
    Para a parte 2 do trabalho, foi criado uma aplicação usando Javascript, para desenvolver o lado do cliente, onde o permite navegar por diferentes rotas dentro do site da loja. Foram ilustradas e implementadas as páginas com as quais, posteriormente, o cliente irá interagir. 
    
    Portando, as páginas também incluem elementos que determinam a aparência do site da loja, para um melhor aproveito do cliente e clareza ao utilizar os ícones implementados no site. Sob outra perspectiva, a implementação dos códigos, junto com o visual, auxiliam positivamente a experência do cliente ao percorrer as páginas do site.
    
    Nos códigos, foram utilizadas bibliotecas, como o Bootstrap, que contribuem com a redução de quantidade de linhas, sem que suas funções sejam modificadas, trazendo agilidade para a implementação.  

4.  **Plano de Teste**

    Usar postman e a interface do cliente para testar as requisições. Monitoramento do banco de dados feito na interfacec web do MongoDB

5.  **Resultado do Teste**

    Testes do postman: https://www.getpostman.com/collections/a42670b20fc41e7ea1c5

6.  **Procedimento de Compilação**
    
    Para compilação do projeto, é necessário instalar alguns pacotes no terminal, na pasta que se encontra os arquivos do trabalho:
    i) Abrir dois terminais, um na pasta client e outro na pasta server.
    ii) Em ambos, rodar o comando: npm install.
    iii) Para rodar: npm start nos dois terminais
    
    Após a intalação das dependências, utiliza-se o comando 'node server.js' para executar o servidor do projeto.

7.  **Problemas**

    Funcionalidade de carrinhho: No momento o carrinho apenas adiciona produtos, e nao difere se um mesmo produto já esta presente. A funcionalidade de limpar o carrinho de um usuario presente na pagina de carrinho foi implementada, mas após alguns conflitos com o objeto resultante dessa operação no banco de dados, foi optado por retira-la. Além disso, quando um produto é adicionado em uum carrinho, o seu estoque não muda no banco de dados.
    
    Ausencia da pagina de checkout.
    
    Ausencia de alguns avisos na interface.
    
    Ausencia de pagina de editar um produto

8.  **Comentários**


