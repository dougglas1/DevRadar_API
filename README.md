
# DevRadar_API

Projeto realizado na Semana Omnistack10.

**Aplicativo DevRadar_API:**
[https://github.com/dougglas1/DevRadar_API](https://github.com/dougglas1/DevRadar_API)

**Aplicativo DevRadar_Web:**
[https://github.com/dougglas1/DevRadar_Web](https://github.com/dougglas1/DevRadar_Web)

**Aplicativo DevRadar_Mobile:**
[https://github.com/dougglas1/DevRadar_Mobile](https://github.com/dougglas1/DevRadar_Mobile)

**Sobre**

O Projeto tem por objetivo utilizar a API para realizar toda a regra de negócio, como também a comunicação com o Banco de Dados MongoDB que será requisitado pelo Aplicativo Web e Mobile.

O Aplicativo Web é responsável pelo cadastro de novos desenvolvedores, também possibilitando a visualização dos desenvolvedores cadastrados.

O Aplicativo Mobile é responsável pela visualização dos desenvolvedores no Google Maps, bem como a filtragem dos desenvolvedores pela proximidade e por tecnologias (separadas por vírgula).

**Requisitos**

**Npm:** [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)

**Node.js:** [https://nodejs.org/en/](https://nodejs.org/en/)

**Yarn:** [https://yarnpkg.com/lang/en/](https://yarnpkg.com/lang/en/)

Verificar se foi instalado:

_**npm -v**_

_**node -v**_

_**yarn -v**_

**Visual Studio Code:** [https://code.visualstudio.com/](https://code.visualstudio.com/)

**Tecnologias**

API desenvolvida em **NodeJS** com Banco de Dados MongoDB

Web desenvolvida em **ReactJS** utilizando da API.

Mobile desenvolvida em **React Native** utilizando da mesma API.

**Pacotes e Bibliotecas NodeJS**

Adição package.json: ***yarn init -y***

Adição node_modules e yarn.lock: ***yarn add express***

Atualização de página automaticamente (-D somente desenvolvimento): ***yarn add nodemon -D***

Utilização do MongoDB: ***yarn add mongoose***

Utilização de Requisição HTTP via Axios: ***yarn add axios***

Utilização de Requisição externa: ***yarn add cors***

O Socket faz com que o Front não necessite efetuar requisição para o backend e o mesmo devolver a resposta, portanto o backend envia a resposta sem a necessidade de uma chamada, assim chamado de protocolo webSocket: **_yarn add socket.io_**

**Pacotes e Bibliotecas ReactJS**

Criação do Projeto: ***yarn create react-app web***

**Pacotes e Bibliotecas React Native**

Utilização do EXPO: _**yarn global add expo-cli**_

para criar o projeto:  _**expo init nomeProjeto**_

escolher o projeto em branco (blank)

Utilização de Navegação entre telas: _**yarn add react-navigation**_

Utilização de outras bibliotecas: **expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context**

gesture: navegação com dedo

reanimated: animações

screens: gerenciar rotas

safe: design da tela para não sair da mesma

Utilização de navegação com eventos (click e demais): 

_**yarn add react-navigation-stack**_

_**yarn add @react-native-community/masked-view**_


Instalação para utilizar o mapa: _**expo install react-native-maps@0.26.1**_

Instalação para utilizar localização:  _**expo install expo-location**_   

Instalação para utilizar o navegador: _**expo install react-native-webview**_ 

Instalação do Axios para chamadas API:  _**yarn add axios**_

Caso for utilizado WebSocket na API será necessário a instalação no Mobile: **yarn add socket.io-client**

**Requisição**

http://localhost:3333

**Buscar todos os desenvolvedores**

**GET:** http://localhost:3333/devs

**Buscar desenvolvedores por latitude, longitude e tecnologias:**

**GET:** http://localhost:3333/search?latitude=0&longitude=0&techs=Angular

**Cadastrar novo Desenvolvedor**

**POST:** http://localhost:3333/devs

**JSON**
{
	"github_username": "dougglas1",
	"techs": "ReactJS, React Native, NodeJS",
	"latitude":-26.9197083,
	"longitude":-49.0706671
}

**Testar o Projeto**

API é necessário executar o comando: ***yarn dev*** (script no package.json) ou ***node index.js***

WEB é necessário executar o comando: ***yarn start***

MOBILE é necessário executar o comando:  ***yarn start***

**Baixar o Projeto**

Para a utilização do projeto é necessário os 3 módulos.

**git clone https://github.com/dougglas1/DevRadar_API.git**

**git clone https://github.com/dougglas1/DevRadar_Web.git**

**git clone https://github.com/dougglas1/DevRadar_Mobile.git**

