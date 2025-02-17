# Backend - Documentação

Este documento fornece instruções detalhadas sobre como instalar, configurar e executar o backend deste projeto.

## Requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Docker](https://www.docker.com/) (opcional, para rodar o MongoDB localmente)
- [MongoDB Atlas](https://www.mongodb.com/) (caso não utilize Docker)
- [Prisma CLI](https://www.prisma.io/) (para gerenciar o banco de dados)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/FabioToledo12/TesteVue-api.git
   ```
2. Acesse o diretório do backend:
   ```sh
   cd backend
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração do Banco de Dados

### Opção 1: Usando Docker
Se você tiver o Docker instalado, pode iniciar um contêiner MongoDB com:
```sh
docker run --name mongodb -d -p 27017:27017 mongo
```

### Opção 2: Usando um Servidor Local
Caso já tenha o MongoDB instalado, basta garantir que ele está rodando na porta padrão (27017).

### Configuração do Arquivo `.env`
Crie um arquivo `.env` na raiz do projeto e adicione a seguinte linha:
```sh
DATABASE_URL="mongodb://localhost:27017/seu-banco"
BASE_URL="http://localhost"
PORT=3333
```

## Executando o Projeto

1. Execute as migrações para configurar o banco de dados:
   ```sh
   npx prisma migrate dev --name init
   ```
2. Inicie o servidor:
   ```sh
   npm run dev
   ```
3. O backend estará rodando em `http://localhost:3333`

## Estrutura do Projeto

```
backend/
│── src/
│   ├── controllers/
│   ├── database/
│   ├── routes/
│   ├── app.ts
│   ├── server.ts
│── prisma/
│── .env
│── package.json
│── tsconfig.json
```

## Rotas da API

### **Obter todos os funcionários**
- **Rota:** `GET /`
- **Resposta:**
  ```json
  [
    {
      "id": "64f6f6c6c6c6c6c6c6c6c6c6",
      "cpf": "123.456.789-00",
      "name": "João Silva",
      "email": "joao@email.com",
      "shirtSize": "M",
      "shoeSize": 42
    }
  ]
  ```

### **Criar um novo funcionário**
- **Rota:** `POST /`
- **Corpo da Requisição:**
  ```json
  {
    "cpf": "123.456.789-00",
    "name": "João Silva",
    "email": "joao@email.com",
    "shirtSize": "M",
    "shoeSize": 42
  }
  ```

### **Obter um funcionário pelo ID**
- **Rota:** `GET /:id`

### **Atualizar um funcionário**
- **Rota:** `PUT /:id`

### **Excluir um funcionário**
- **Rota:** `DELETE /:id`

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para APIs REST
- **Prisma** - ORM para interação com MongoDB
- **MongoDB** - Banco de dados NoSQL
- **Docker** - Contêinerização (opcional)
- **Cors** - Middleware para controle de acesso entre domínios

## Contribuição

Se desejar contribuir para este projeto, siga estes passos:

1. Fork o repositório.
2. Crie uma branch (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -m 'Minha nova funcionalidade'`).
4. Push para o branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).