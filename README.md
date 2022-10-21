# Pointhub-test

## Number 3 - Clean Architecture

### Description :
this a simple boilerplate with express js implement clean architecture. some stack use here :

- ExpressJS
- Typescript
- TypeORM
- 

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

- for production run with this
```
yarn start
```

### Ready Endpoint :

|`/users`||||
|-|-|-|-|
|**Method**|**Route**|**Description**|
|GET|`/users/:id`|get a user by id|
|GET|`/users`|get all users|
|POST|`/users`|create a user|
|PUT|`/users/:id`|update a user by id|
|DELETE|`/users/:id`|delete a user by id|


### Structure :
```
src - as ROOT
├── app - Application or layer
│   ├── config - Config application layer
│   ├── controllers - Controller application layer
│   ├── data-access - Data access for models
│   ├── models - All entity models
│   └── use-cases - Use cases for models
├── common - Cross concerns layer
│   ├── adapters - Adapters for external services
│   └── helpers - Helper functions
└── infrastructure - Infrastructure layer
    ├── express - Everything express related
    │   ├── middlewares - Express middlewares
    │   ├── routes - Express routes
    └── repositories - Repositories implementations
        └── type-orm - Type-orm repositories
```

### Note :
- Some directory is empty just for sample of structure, not yet usage for now
- Some file not used just for sample placement of project struture

### Reference :
- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://merlino.agency/blog/clean-architecture-in-express-js-applications
- https://mannhowie.com/clean-architecture-node
- https://dev.to/japhernandez/clean-architecture-with-nodejs-typescript-and-mongo-3ene
