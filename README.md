# Pointhub-test

## Number 3 - Clean Architecture

### Description :
this a simple boilerplate with express js implement clean architecture. some stack use here :

- ExpressJS
- Typescript
- TypeORM / Mongoose
- 

### Structure :
```
src - as ROOT
├── app - Application or layer
│   ├── config - Config application layer
│   ├── models - All entity models
│   └── use-cases - Use cases for all entity
├── common - Cross concerns layer
│   ├── adapters - Adapters for external services
│   └── helpers - Helper functions
├── infrastructure - Infrastructure layer
│   ├── express - Everything express related
│   │   ├── middlewares - Express middlewares
│   │   ├── routes - Express routes
│   └── repositories - Repositories implementations
│       ├── mongoose - Mongoose repositories
│       └── type-orm - Type-orm repositories
```

### Step :
- clone this repo
- do init with 
```
yarn
```

- for development run with this
```
yarn watch
```

### Reference :
- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://merlino.agency/blog/clean-architecture-in-express-js-applications
- https://mannhowie.com/clean-architecture-node
- https://dev.to/japhernandez/clean-architecture-with-nodejs-typescript-and-mongo-3ene
