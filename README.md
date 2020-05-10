<h1 align="center" >
  GoMarketplace
</h1>
<h1 align="center">
  <img alt="Go Barber" src="./src/assets/gomarketplace.gif"/>
</h1>
<h3 align="center" >
  Um simples sistema de carrinho para adicionar e remover produtos, usando ContextAPI e AsyncStorage
</h3>

<p align="center">
  <a href="https://github.com/giangr21" target="_blank">
    <img alt="Made by Gian Antunes" src="https://img.shields.io/badge/made%20by-Gian_Antunes-informational">
  </a>
  <a href="https://github.com/giangr21" target="_blank" >
    <img alt="Github - Arthur Pedroti" src="https://img.shields.io/badge/Github--%23F8952D?style=social&logo=github">
  </a>
  <a href="https://www.linkedin.com/in/gian-antunes-21163b152/" target="_blank" >
    <img alt="Linkedin - Gian Antunes" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
  </a>
</p>

## 🔖 Sobre

nesse projeto, criamos um contexto de carrinho para abranger todo o aplicativo. Nesse contexto, criamos alguns hooks para gerenciar o estado dos produtos sobre o aplicativo. Basicamente, criamos um useEffect para ouvir todas as alterações e salvá-las no AsyncStorage, para não perder o carrinho ao sair do aplicativo, e criamos os hooks (incremento e decremento) para gerenciar o estado dos produtos.

## 🌐 Tecnologias

- **React**
- **ReactNative**
- **ESLint**
- **Prettier**
- **Styled-Components**
- **Axios**
- **ContextAPI**
- **AsyncStorage**

## 📥 Como baixar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/giangr21/desafio-bootcamp-fundamentos-react-native

    # Navegar para o diretório
    $ cd desafio-bootcamp-fundamentos-react-native

    # instalar as dependências
    $ yarn

    # iniciar simulador de api
    $ yarn json-server server.json -p 3333

	  # caso esteja utilizando emulador ios
    $ cd ios
    $ pod install
    $ cd..

    # Iniciar o projeto
    $ yarn ios / android
```
---
🔛 Desenvolvido por Gian Antunes
