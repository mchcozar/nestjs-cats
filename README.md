# NestJS Cats API

A RESTful API built with [NestJS](https://nestjs.com/) for managing cats and breeds, using [TypeORM](https://typeorm.io/) with MySQL.

## Tech Stack

- **NestJS** v11 - Node.js framework
- **TypeORM** - ORM for MySQL
- **MySQL 8.0** - Database (via Docker)
- **class-validator** / **class-transformer** - Request validation
- **Jest** - Testing
- **ESLint** + **Prettier** - Linting and formatting

## Prerequisites

- Node.js v18+
- Yarn or npm
- Docker and Docker Compose

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mchcozar/nestjs-cats.git
cd nestjs-cats
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Start the database

```bash
docker-compose up -d
```

This starts a MySQL 8.0 container on port **3307** with the following configuration:

| Variable              | Value       |
|-----------------------|-------------|
| `MYSQL_DATABASE`      | `db_crud`   |
| `MYSQL_USER`          | `user_crud` |
| `MYSQL_PASSWORD`      | `root`      |
| `MYSQL_ROOT_PASSWORD` | `root`      |

### 4. Start the application

```bash
# Development (watch mode)
yarn start:dev

# Production
yarn build
yarn start:prod
```

The API will be available at `http://localhost:3000` with the global prefix `api/v1`.

## Project Structure

```
src/
├── main.ts              # Entry point, global prefix & validation pipe
├── app.module.ts        # Root module (TypeORM config, imports)
├── cats/
│   ├── cats.module.ts
│   ├── cats.controller.ts
│   ├── cats.service.ts
│   ├── entities/
│   │   └── cat.entity.ts
│   └── dto/
│       ├── create-cat.dto.ts
│       └── update-cat.dto.ts
└── breeds/
    ├── breeds.module.ts
    ├── breeds.controller.ts
    ├── breeds.service.ts
    ├── entities/
    │   └── breed.entity.ts
    └── dto/
        ├── create-breed.dto.ts
        └── update-breed.dto.ts
```

## API Endpoints

All endpoints are prefixed with `/api/v1`.

### Cats

| Method   | Endpoint            | Description       |
|----------|---------------------|-------------------|
| `POST`   | `/api/v1/cats`      | Create a cat      |
| `GET`    | `/api/v1/cats`      | Get all cats      |
| `GET`    | `/api/v1/cats/:id`  | Get a cat by ID   |
| `PATCH`  | `/api/v1/cats/:id`  | Update a cat      |
| `DELETE` | `/api/v1/cats/:id`  | Soft-delete a cat |

#### Create Cat Request Body

```json
{
  "name": "Whiskers",
  "age": 3,
  "breed": "Siamese"
}
```

- `name` (string, required) - minimum 3 characters
- `age` (number, required) - positive integer
- `breed` (string, optional) - must match an existing breed name

### Breeds

| Method   | Endpoint              | Description      |
|----------|-----------------------|------------------|
| `POST`   | `/api/v1/breeds`      | Create a breed   |
| `GET`    | `/api/v1/breeds`      | Get all breeds   |
| `GET`    | `/api/v1/breeds/:id`  | Get a breed by ID|
| `PATCH`  | `/api/v1/breeds/:id`  | Update a breed   |
| `DELETE` | `/api/v1/breeds/:id`  | Delete a breed   |

#### Create Breed Request Body

```json
{
  "name": "Siamese"
}
```

- `name` (string, required) - minimum 3 characters

## Data Model

### Cat

| Field       | Type   | Description                  |
|-------------|--------|------------------------------|
| `id`        | number | Auto-generated primary key   |
| `name`      | string | Cat name                     |
| `age`       | number | Cat age                      |
| `breed`     | Breed  | Related breed (eager-loaded) |
| `deletedAt` | Date   | Soft-delete timestamp        |

### Breed

| Field  | Type   | Description                |
|--------|--------|----------------------------|
| `id`   | number | Auto-generated primary key |
| `name` | string | Breed name (max 500 chars) |

A **Breed** has a one-to-many relationship with **Cat**.

## Available Scripts

| Command              | Description                 |
|----------------------|-----------------------------|
| `yarn start`         | Start in production mode    |
| `yarn start:dev`     | Start in watch mode         |
| `yarn start:debug`   | Start in debug mode         |
| `yarn build`         | Compile TypeScript          |
| `yarn lint`          | Run ESLint                  |
| `yarn format`        | Format code with Prettier   |
| `yarn test`          | Run unit tests              |
| `yarn test:watch`    | Run tests in watch mode     |
| `yarn test:cov`      | Run tests with coverage     |
| `yarn test:e2e`      | Run end-to-end tests        |

## Validation

The API uses a global `ValidationPipe` with the following settings:

- **whitelist** - strips unknown properties from request bodies
- **forbidNonWhitelisted** - throws an error if unknown properties are sent
- **transform** - automatically transforms payloads to DTO instances

## License

UNLICENSED
