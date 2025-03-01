# Teste Técnico - Front-end BeTalent

Este repositório contém a solução para o Teste Técnico de Front-End da BeTalent.

## 📄 Implementação

A aplicação foi desenvolvida utilizando **React.js** com **Vite** para melhor performance e agilidade no desenvolvimento. 

### Funcionalidades
- Exibição de uma tabela responsiva contendo:
  - Imagem (thumbnail do/a usuário/a);
  - Nome;
  - Cargo;
  - Data de admissão;
  - Telefone.
- Campo de pesquisa para filtrar dados por nome, cargo e telefone.
- Formatação de datas e telefones diretamente no front-end.
- Estilização responsiva para adaptação em diferentes tamanhos de tela.

### Tecnologias utilizadas
- **React.js** com **Vite**;
- **Styled-components** para estilização;
- **react-router-dom** para roteamento;
- **motion** para animações;
- **react-use** para hooks utilitários;
- **json-server** para simulação da API;
- **TypeScript** para tipagem segura (opcional, mas recomendado).

## 🔧 Como executar

1. Clone o repositório e entre na pasta do projeto:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
2. Instale as dependências:
```bash
yarn install  # ou npm install
```
3. Inicie a API simulada:
```bash
make server  # ou npx json-server --watch db.json
```
4. Rode o projeto:
```bash
yarn dev  # ou npm run dev
```
A aplicação estará disponível em **http://localhost:5173/**.

## 📊 Estrutura do projeto

```
/seu-projeto
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── layout/          # Página intermediária de layout
│   ├── styles/          # Estilos globais e tema
│   ├── types/           # Tipagens da aplicação
│   ├── utils/           # Funções auxiliares
│   ├── services/        # Requisições para API
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Ponto de entrada do React
├── db.json              # API simulada com json-server
├── package.json         # Dependências do projeto
```

Se precisar de ajustes, me avise! 🚀

