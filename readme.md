# Caerus Framework

## What is it?
An opinionated framework and ecosystem for building web applications with the goal of rapid development and low maintenence.

The stack and ecosystem will evolve over time by adopting newer and better technologies, in order to improve performance and power; whilst identifying common, stable patterns for abstraction and generation, leading to increases in productivity.

## Goal of the Project
Performance, Power and Productivity. 

## Values
- Fast
- Extensible
- Maintainable
- Productive
- Experimental

## What Caerus Provides
 - A default tech stack proven to work together, which provide rapid development, low maintenence, security and accessibility out of the box.
 - A CLI tool to generate the project folder structure. Resource scaffolding, database migrations and type generation.
 - A standard library with commonly used functions, e.g. pluralize, titalize, async forEach() and more.
 - Plugin support.
 - i18n and Accessibility as a first class citizen.
 - Templating support for generating projects with a different default stack.

### Official Plugins
 - Content Management System (Template Components, Menus, JWT Auth, Multimedia Asset Management)
 - Basic Order Management System
 - PIM
 - Stripe Payments
 - Shopping Cart

## Folder Structure
```
{project-name}/
  client/
    src/
      shared/
        _{partial-component}.tsx
        _{partial-component}.module.css
      support/
        fixtures/
      {resource}/
        _{partial-component}.tsx
        _{partial-component}.module.css
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
  - End-to-end acceptance tests through `jest-cucumber`
  - Resolver tests through `jest`

## Clientside

### Packages
- TypeScript
- create-react-app
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

## Command Line Interface

The Caerus Command Line Interface (CLI) makes it easy to initialise new projects and to generate scaffolding for existing projects. It’s an essential part of using Caerus.

### Installing the Caerus CLI Tool

Install the Caerus package from your workspace folder to get started:

`$ yarn global add caerus`

## CLI Commands

The Caerus CLI supports the following abilities:

- Initialising projects (TBA)
- Generating end-to-end resources including tests (TBA)
- Generating entities
- Generating resolvers (TBA)
- Generating views (TBA)
- Generating migrations (TBA)
- Generating types (TBA)

### Generating Entities

To generate an entity with default columns (id, createdAt, updatedAt and deletedAt) and graphql typedefs, run the following command from the root of your project:

`$ yarn caerus generate entity [name]`

Where `name` is the name of your resource.  Entities should be singular and use `-` for multiple words, e.g. `blog-post`.

