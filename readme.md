# Caerus Framework

## What is it?
An opinionated framework and ecosystem for building web applications with the goal of rapid development and low maintenence.

By adopting newer and better technologies, performance and power increases; whilst identifying common, stable patterns for abstraction and generation, leads to an increase in productivity.

## Goal of the Project
Performance, Power and Productivity. 

## Values
- Fast
- Extensible
- Maintainable
- Productive
- Experimental

## What Caerus Provides
 - A default tech stack proven to work together, which provide rapid development, low maintenence, security out of the box.
 - A CLI tool to generate the project folder structure. New resource scaffolding and migration and type generation.
 - A standard library with commonly used functions, e.g. pluralize(), async forEach() and more.
 - Plugin support.
 - i18n and Accessibility as a first class citizen.

### Official Plugins
 - CMS (Template Components, Menus, JWT Auth, Digital Media Management)
 - OMS
 - PIM
 - Stripe Payments
 - Shopping Cart

## Folder Structure
```
client/
  src/
    shared/
      _partial-component.tsx
      _partial-component.module.css
    support/
      fixtures/
    {resource}/
      _partial-component.tsx
      _partial-component.module.css
      {action}.view.tsx
      {resource}.queries.graphql
      {resource}.routes.tsx
    application.layout.tsx
    application.routes.tsx
    index.tsx
server/
  src/
    config/
      index.ts
      routes.ts
      apollo.ts
    db/
      migrations/
      database.config.ts
      ormconfig.js
      seeds.ts
    entities/
      {resource}.entity.ts
    features/
      {story}.feature
      {story}.tests.ts
    lib/
    resolvers/
      {resource}/
        {resource}.args.ts
        {resource}.input.ts
        {resource}.resolver.ts
        {resource}.test.ts
    support/
      factories/
      fixtures/
      jest/
      puppeteer/
    server.ts
```
 
## Test suite
  - End-to-end acceptance tests
  - Resolver tests

## Clientside

### Packages
- TypeScript
- create-react-app (React Hooks)
- React Router
- Apollo Client
- Formik
- Yup
- Jest
- React Testing Library

## Serverside 

### Packages and Services
 - TypeScript
 - Apollo Server
 - Express
 - TypeORM
 - TypeGraphQL
 - Class Validator
 - DotEnv
 - Postgres
 - Jest
 - Jest Puppeteer
 - Jest Cucumber


## Getting Started with Caerus

### Installing Caerus

To install Caerus, using Yarn
`$ yarn add caerus`

Using NPM
`$ npm install caerus --save`

### Generating Entities
`$ yarn caerus generate entity name-of-entity`
