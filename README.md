# User Service

This is a NestJS service that manages a large database of users, each with fields for first name, last name, age, gender, and a boolean flag indicating problems.

## Features

- Endpoint to reset the `problems` flag for all users and count how many users had the flag set to `true`.

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
