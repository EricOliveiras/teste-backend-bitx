## Utlizando o projeto

### Dependências globais

Você precisa destas dependencias instaladas:

- Node.js LTS v16 (ou superior, utilizaremos o nvm para gerenciar os pacotes node)
- Yarn (caso não tenha instalado, poderá utilizar: `npm install --global yarn`)
- Docker Engine v17.12.0 com Docker Compose v1.24.1 (ou qualquer versão superior)
- Mongo Server v5.0 ou superior

Recomendação:
 - Nos arquivos do projeto, na pasta /postman, existe o arquivo bitx_api.json com os métodos HTTP e rotas usadas para as requisições no postman, você deve importa-lo no seu postman.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/EricOliveiras/teste-backend-bitx.git
```

Entre no diretório do projeto

```bash
  cd teste-backend-bitx
```

Instale as dependências

```bash
  yarn
```

Inicie o servidor

```bash
  yarn dev
```
> Note que o docker precisa está rodando na sua máquina.

### URL de acesso ao database localmente
Você pode utilizar o mongo compass para acessar o banco de dados
- 'mongodb://admin:admin@localhost:27017/bitx_db?authSource=admin&directConnection=true'

## Entregas

  - CRUD de Tarefas
  - CRUD de Membros, para adicionar membros nas tasks (Adicional)

## Stack utilizada

- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
