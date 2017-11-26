# Medals developer documentation

## Software requirements

Ensure you have these installed before setup.

* [yarn](https://yarnpkg.com)
* [now](https://now.sh) (only for deployment)


## Setup

After cloning this repo, in your terminal run:

```sh
yarn
```

This will install project dependencies and apply database migrations.

To seed the database:

```sh
yarn run seed
```

## Running tests

```sh
yarn test     # unit/micro tests
yarn run e2e  # end-to-end tests
```

To run the unit/micro tests in watch mode:

```sh
yarn run test:watch
```


## Running locally

In development mode:

```sh
yarn run dev
```

In production mode:

```sh
yarn run build
yarn start
```


## Deployment

```sh

```
