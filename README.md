# 🐱 NestJS Cats API

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/mchcozar/nestjs-cats?style=for-the-badge)](https://github.com/mchcozar/nestjs-cats/stargazers)

[![GitHub forks](https://img.shields.io/github/forks/mchcozar/nestjs-cats?style=for-the-badge)](https://github.com/mchcozar/nestjs-cats/network)

[![GitHub issues](https://img.shields.io/github/issues/mchcozar/nestjs-cats?style=for-the-badge)](https://github.com/mchcozar/nestjs-cats/issues)

[![GitHub license](https://img.shields.io/github/license/mchcozar/nestjs-cats?style=for-the-badge)](LICENSE) <!-- TODO: Add LICENSE file if applicable -->

**A boilerplate NestJS API for managing cats data with TypeORM and MySQL.**

</div>

## 📖 Overview

This repository features a robust backend API developed with NestJS, demonstrating a clean architecture for managing `Cat` entities. It integrates TypeORM as the Object-Relational Mapper (ORM) for seamless interaction with a MySQL database. The project serves as a foundational example for building scalable and maintainable RESTful services using modern Node.js ecosystems, complete with a Dockerized development environment for quick setup and consistency.

## ✨ Features

-   **RESTful API**: Exposes endpoints for standard CRUD (Create, Read, Update, Delete) operations on `Cat` entities.
-   **Data Persistence**: Utilizes MySQL database for storing and retrieving cat information.
-   **Object-Relational Mapping**: Leverages TypeORM for powerful and flexible database interactions, defining `Cat` entities and repositories.
-   **Structured Architecture**: Built with NestJS modules, controllers, and services, promoting modularity and separation of concerns.
-   **Data Validation**: Ensures data integrity with DTOs (Data Transfer Objects) for incoming requests.
-   **Dockerized Environment**: Includes `docker-compose.yml` for easily spinning up the application alongside a MySQL database.
-   **TypeScript Support**: Fully written in TypeScript for enhanced code quality and developer experience.
-   **Testing**: Comprehensive unit and e2e tests setup with Jest.

## 🛠️ Tech Stack

**Backend:**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![TypeORM](https://img.shields.io/badge/TypeORM-FA2828?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)

**Database:**

[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

**DevOps:**

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

[![Docker Compose](https://img.shields.io/badge/Docker_Compose-000000?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/compose/)

**Testing:**

[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

[![Supertest](https://img.shields.io/badge/Supertest-000000?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/visionmedia/supertest)

**Linting & Formatting:**

[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

[![Prettier](https://img.shields.io/badge/Prettier-F7BA3E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

## 🚀 Quick Start

Follow these steps to get the NestJS Cats API up and running on your local machine.

### Prerequisites
-   **Node.js**: v18.x or higher
-   **Yarn** or **npm**: For package management.
-   **Docker** and **Docker Compose**: For running the MySQL database.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/mchcozar/nestjs-cats.git
    cd nestjs-cats
    ```

2.  **Install dependencies**
    ```bash
    # Using Yarn (recommended due to yarn.lock)
    yarn install
    # Or using npm
    # npm install
    ```

3.  **Environment setup**
    Create a `.env` file in the project root based on the following template (or `docker-compose.yml` defaults):
    ```
    # Database Configuration
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=rootpassword
    DB_DATABASE=nestjs_cats
    ```
    *Note: The `docker-compose.yml` file uses `root` as user and `rootpassword` as password by default for the MySQL service. Adjust these in your `.env` if you change the `docker-compose.yml` or use an external database.*

4.  **Database setup**
    Start the MySQL database using Docker Compose:
    ```bash
    docker-compose up -d mysql
    ```
    This will spin up a MySQL container. The application will connect to it upon startup.
    The TypeORM configuration in `ormconfig.ts` (or similar, inferred) will handle schema synchronization in development mode.

5.  **Start development server**
    ```bash
    # Using Yarn
    yarn start:dev
    # Or using npm
    # npm run start:dev
    ```
    The API will be available at `http://localhost:3000` (default NestJS port).

## 📁 Project Structure

```
nestjs-cats/
├── src/                # Main application source code
│   ├── main.ts         # Application entry point
│   ├── app.module.ts   # Root application module
│   ├── app.controller.ts # Root controller (basic example)
│   ├── app.service.ts  # Root service
│   └── cats/           # Cats module for managing cat entities
│       ├── cats.module.ts
│       ├── cats.controller.ts # Handles incoming requests for /cats
│       ├── cats.service.ts  # Business logic for cats
│       ├── entities/      # TypeORM entity definition for Cat
│       │   └── cat.entity.ts
│       └── dto/           # Data Transfer Objects for requests
│           ├── create-cat.dto.ts
│           └── update-cat.dto.ts
├── test/               # E2E tests for API endpoints
├── .gitignore          # Files ignored by Git
├── .prettierrc         # Prettier configuration
├── docker-compose.yml  # Docker Compose setup for services (app + db)
├── eslint.config.mjs   # ESLint configuration
├── nest-cli.json       # NestJS CLI configuration
├── package.json        # Project dependencies and scripts
├── package-lock.json   # npm dependency lock file
├── tsconfig.json       # TypeScript configuration for the project
├── tsconfig.build.json # TypeScript configuration for building
└── yarn.lock           # Yarn dependency lock file
```

## ⚙️ Configuration

### Environment Variables
The application uses environment variables for sensitive information, especially database connection details. These are typically loaded from a `.env` file in development.

| Variable      | Description                      | Default (from `docker-compose.yml`) | Required |

|---------------|----------------------------------|-------------------------------------|----------|

| `DB_HOST`     | Database host address            | `localhost` (or `mysql` in Docker) | Yes      |

| `DB_PORT`     | Database port                    | `3306`                              | Yes      |

| `DB_USERNAME` | Database user name               | `root`                              | Yes      |

| `DB_PASSWORD` | Database password                | `rootpassword`                      | Yes      |

| `DB_DATABASE` | Database name                    | `nestjs_cats`                       | Yes      |

### Configuration Files
-   `.prettierrc`: Configures Prettier for consistent code formatting.
-   `eslint.config.mjs`: Configures ESLint for static code analysis and identifying problematic patterns.
-   `nest-cli.json`: Provides configuration for the NestJS CLI, including project source root and build options.
-   `tsconfig.json`, `tsconfig.build.json`: TypeScript compiler configurations for development and production builds.

## 🔧 Development

### Available Scripts
The following scripts are defined in `package.json` for development tasks:

| Command             | Description                                   |

|---------------------|-----------------------------------------------|

| `npm run start`     | Starts the application in production mode     |

| `npm run start:dev` | Starts the application in watch mode (reloads on file changes) |

| `npm run start:debug`| Starts the application in debug mode          |

| `npm run build`     | Compiles TypeScript to JavaScript             |

| `npm run lint`      | Runs ESLint to check for code style issues    |

| `npm run format`    | Formats code using Prettier                   |

| `npm run test`      | Runs all tests (unit and e2e)                 |

| `npm run test:watch`| Runs tests in watch mode                      |

| `npm run test:cov`  | Runs tests with coverage report               |

| `npm run test:debug`| Runs tests in debug mode                      |

| `npm run test:e2e`  | Runs end-to-end tests                         |

### Development Workflow
1.  Ensure prerequisites are met and dependencies are installed.
2.  Set up your `.env` file.
3.  Start the database using `docker-compose up -d mysql`.
4.  Start the NestJS development server with `yarn start:dev` (or `npm run start:dev`).
5.  Develop features, write tests, and ensure code quality with `yarn lint` and `yarn format`.

## 🧪 Testing

This project uses Jest for unit and end-to-end testing.

```bash

# Run all tests (unit and e2e)
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests and generate a coverage report
yarn test:cov

# Run only end-to-end tests
yarn test:e2e
```

## 🚀 Deployment

### Production Build
To create a production-ready build of the application:

```bash
yarn build

# Or
npm run build
```
This command compiles the TypeScript source code into JavaScript in the `dist` directory.

### Deployment Options
Given the `docker-compose.yml` and a standard NestJS structure, deployment typically involves:
-   **Docker Containerization**: Building a Docker image of the application using a `Dockerfile` (if one were present, not explicitly listed but a common practice with `docker-compose.yml`).
-   **Cloud Hosting**: Deploying the built `dist` directory to a cloud provider (e.g., AWS EC2, Google Cloud Run, Heroku) or a serverless platform (e.g., AWS Lambda with Serverless Framework).
-   **Orchestration**: Using Docker Compose (for simpler setups) or Kubernetes (for complex, scalable microservices) to manage the application and database containers.

## 📚 API Reference

The API provides endpoints for managing `Cat` resources. The base URL for the API is `http://localhost:3000` (or your deployed URL).

### Cat Model Structure
A `Cat` entity is expected to have the following structure:

```json
{
  "id": "string (UUID)",
  "name": "string",
  "breed": "string",
  "age": "number"
}
```

### Endpoints

#### `GET /cats`
-   **Description**: Retrieves a list of all cats.
-   **Response**: `200 OK` with an array of `Cat` objects.
    ```json
    [
      { "id": "uuid-1", "name": "Whiskers", "breed": "Siamese", "age": 3 },
      { "id": "uuid-2", "name": "Mittens", "breed": "Persian", "age": 5 }
    ]
    ```

#### `GET /cats/:id`
-   **Description**: Retrieves a single cat by its ID.
-   **Parameters**:
    -   `id`: The unique identifier of the cat (UUID).
-   **Response**: `200 OK` with the `Cat` object, or `404 Not Found` if the cat does not exist.
    ```json
    { "id": "uuid-1", "name": "Whiskers", "breed": "Siamese", "age": 3 }
    ```

#### `POST /cats`
-   **Description**: Creates a new cat.
-   **Request Body**:
    ```json
    {
      "name": "string",
      "breed": "string",
      "age": "number"
    }
    ```
-   **Response**: `201 Created` with the newly created `Cat` object.
    ```json
    { "id": "uuid-3", "name": "Leo", "breed": "Maine Coon", "age": 2 }
    ```

#### `PUT /cats/:id`
-   **Description**: Updates an existing cat by its ID.
-   **Parameters**:
    -   `id`: The unique identifier of the cat (UUID).
-   **Request Body**:
    ```json
    {
      "name": "string",
      "breed": "string",
      "age": "number"
    }
    ```
-   **Response**: `200 OK` with the updated `Cat` object, or `404 Not Found`.
    ```json
    { "id": "uuid-1", "name": "Whiskers Jr.", "breed": "Siamese", "age": 4 }
    ```

#### `DELETE /cats/:id`
-   **Description**: Deletes a cat by its ID.
-   **Parameters**:
    -   `id`: The unique identifier of the cat (UUID).
-   **Response**: `204 No Content` if successful, or `404 Not Found`.

## 🤝 Contributing

We welcome contributions! If you're interested in improving this project, please consider the following:

1.  Fork the repository.
2.  Create a new branch for your feature or bugfix.
3.  Commit your changes following conventional commit guidelines.
4.  Push your branch and open a pull request.

Please ensure your code adheres to the existing style and passes all tests.

### Development Setup for Contributors
The development setup is identical to the "Quick Start" guide. Please ensure Docker and Docker Compose are running for the database, and use `yarn start:dev` for the application.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the `LICENSE` file for details. <!-- TODO: Add actual LICENSE file -->

## 🙏 Acknowledgments

-   [NestJS](https://nestjs.com/) - For providing an amazing framework for building scalable Node.js applications.
-   [TypeORM](https://typeorm.io/) - For the powerful ORM capabilities and seamless database integration.
-   [MySQL](https://www.mysql.com/) - The robust relational database used in this project.

## 📞 Support & Contact

If you have any questions, suggestions, or encounter issues, please feel free to:
-   🐛 Open an issue on [GitHub Issues](https://github.com/mchcozar/nestjs-cats/issues).
-   📧 Contact the repository owner: [mchcozar](https://github.com/mchcozar) <!-- TODO: Add a direct contact email if desired -->

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [mchcozar](https://github.com/mchcozar)

</div>
