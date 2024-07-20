# Estudo sobre utilização de pacotes (webpack e babel)

## 📝 Descrição

   Página estatica com o intuito e exercitar a utilização de pacotes e dependências.
  

## 💻 Tecnologias
 
   A seguir, estão as tecnologias utilizadas no respositório:

   Pacotes utilizados:

   - Babel: A bilioteca Babel é uma transpiladora de aquivos que JavScript usada para garantir a compatibilidade do projeto na maior parte dos navegadores, mesmo quando utilizando recursos mais modernos da linguagem. Você pode ver mais sobre a biblioteca no site [Babel](https://babeljs.io/).
    
   - Webpack: O webpack é uma biblioteca empacotadora de arquivos que auxilia no desenvolvimento da aplicação e na simplificação dos arquivos utilizados no projeto, ajudando na performance da aplicação como um todo no navegador. Basicamente ele pega todos os arquivos sinalizados no ponto de entrada e simplifica eles em um arquivo para cada formato (ou mais, você precise). Você pode ver mais na documentação do site oficial do [Webpack](https://webpack.js.org/). <br>
   Obs.: Também utilizei o web-pack-server para auxiliar no desenvolvimento.
    
   Outras tecnologias:
   - JavaScript: arquivo usado como pronto de entrada na utilização do webpack.
   - HTML: para estruturar o conteúdo da página.
   - CSS: para estilizar a página com cores e detalhes de design.

## 🛠 Pré-requisitos<br>

A intenção do projeto é que ele seja compatível com o máximo de navegadores possível, então você não deve ter problema ao utilizar no seu.

   - Não existe nenhuma dependência que não seja de desenvolvimento então você não precisa instalar nenhum pacote para rodar o código fonte da pasta `./dist` na sua máquina, basta baixar a pasta o cloná-lo seguindo as intruções do GitHub.

   - Caso queira ter uma versão sua do projeto, você precisa ter o npm e o node.js instalados na sua máquina. Depois disso basta clonar o projeto seguindo as próprias instrucoes do GiHub. As intruções de instalação do pacotes estão no próximo tópico.  

## 🛠 Instalação
   Após clonar o repositório, basta digitar `<npm i>` para que os recursos sejam instaladas.
   Mas o que será instalado? 🤔
   - Webpack:
      - A bilioteca principal `webpack`, a biblioteca `webpack-cli` que permite o usuário a executar scripts na CLI e a biblioteca `webpack-dev-server` que auxilia no desenvolvimento permitindo que a ferramenta execute em tempo real, quando ativada.
   - Babel:
      - A bilioteca principal `@babel/core`, a biblioteca `@babel/cli` que permite o usuário a executar scripts na CLI e o preset de configurações de arquivo padrão da biblioteca `@babel/preset-env`. Por último, será instalado loader chamado `babel-loader` que fará a integração do Babel com o Webpack.
   - Outros recursos:
      - Os loaders `style-loader` e `css-loader` também serão instalados para integração com o webpack, permitindo que ele processe também arquivos css.
      - Outra alternativa de loader que será instalada é o `mini-css-extract-plugin` que pode ser utilizada no lugar do `style-loader`

## 🚀 Uso

   Para facilitar o uso das ferramentas, coloquei alguns scripts que podem ser conferidos e alterados (se assim preferir) no arquivo `package.json` na secção de sripts, para executá-los, basta executar algum dos comandos a seguir no terminal dentro do projeto:

   ``````````
   <npm start>: O script ativará o webpack e gerará arquivos provisórios na pasta `./dist`.

   <npm run dev>:  O script ativará o webpack e gerará arquivos provisórios na pasta `./dist`. Porém ele permite que
você execute o código na porta padrão `localhost: 8080`. Caso você abra o arquivo nessa porta e faça alguma alteracão
em algum dos arquivos, webpack compactará os arquivos novamente de forma automática.

   <npm run build>:  O script ativará o webpack e gerará arquivos com o processamento final e devidamente otimizados
na pasta `./dist`.
   ``````````
   

## ✒️ Autores

   > Desenvolvedor: [Marcus Soares](https://github.com/marcus-soares1)

   > Orientado por: [OneBitCode](https://onebitcode.com/javascript?utm_campaign=OBC-C+|+E0-UNC+|+CAR+|+SCH+|+T1S-BRD+|+CPA+|+BR+|+2022-11-10+|+FULL+STACK+|+Branding&utm_content=onebitcode&utm_term=00+|+SCH+|+Keywords+|++Branding&&utm_medium=paid-traffic&utm_source=g&ltk_gcm=20978031545&ltk_gag=161130217591&ltk_gac=689155321426&ltk_gne=g&gad_source=1&gclid=Cj0KCQjwwO20BhCJARIsAAnTIVSeGhz7xhU-_s_6hVX8gMcNEE_wR_scyh1H3B-nI-kd2gMcpXPAC0caAtl6EALw_wcB)

<!-- Exemplo de README no repositório de Mariana Antonia (https://github.com/mariana549) -->