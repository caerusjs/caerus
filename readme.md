# Caerus Framework
![](https://github.com/krisquigley/caerus/workflows/Node.js%20CI/badge.svg)

## What is it?
An opinionated framework for building web applications with the goal of rapid development and low maintenence.

The stack will evolve over time by adopting newer and better technologies, in order to improve performance and power; whilst identifying common, stable patterns for abstraction and generation, leading to increases in productivity.

## Project Goal
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
 - Templating support for generating projects with a different default stack.

## Folder Structure
```
{project-name}/
  client/
    src/
      atoms/
      molecules/
      organisms/
      routes/
        {resource}.tsx
        index.tsx
      support/
        fixtures/
      views/
        {resource}/
          new.tsx
          edit.tsx
          show.tsx
          index.tsx
        layouts/
          application.layout.tsx
      index.tsx
  server/
    src/
      config/
        index.ts
        routes.ts
        apollo.ts
      db/
        migrations/
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
      ormconfig.js
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
 - Jest
 - Jest Puppeteer
 - Jest Cucumber

## Getting Started

The Caerus Command Line Interface (CLI) makes it easy to initialise new projects and to generate scaffolding for existing projects. It’s an essential part of using Caerus.

### Installing the Caerus CLI Tool

Install the Caerus package from your workspace folder to get started:

`$ yarn add caerus`

### Initializing a new project

From your workspace folder run the following:

`$ yarn caerus init <name>`

Where `name` is the name of your project.  Use `-` for multiple words, e.g. `my-project`.

This will then create a folder based on the project name you provided and generate all relevant files and folders needed to get you started.

### Installing Dependencies

From the root of your newly generated project folder run:

`$ yarn`

This will install all the dependencies needed for both the client and server.

### Booting the application

Still from the root of your project folder, run:

`$ yarn dev`

This will start all relevant services for your project. Once booted you will likely receive a TypeScript error, this is due to GraphQL types not being generated on first boot.

To resolve this, open a new terminal window and navigate to the root of your project folder again. With the app still running, run the following command:

`$ yarn codegen`

This will generate the relevant types and the app should restart without error now. This mild annoyance will be addressed in a future version of Caerus

## Generating your first resource

In this example we will be generating a resource called `post` which will be used for adding posts to our project.

### Running the generate resource command

From the root folder of your application run the following command:

`$ yarn caerus g resource post`

This will then generate the relevant files and folders associated with your resource.

### Adding extra columns to our entity

- add columns to entity
- update args
- update tests
- update variables
- update forms


## CLI Commands

The Caerus CLI supports the following abilities:

- Initialising projects 
- Generating end-to-end resources including tests (v0.5.0)
- Generating entities
- Generating resolvers
- Generating views 
- Generating migrations (v0.6.0)
- Generating types (v0.6.0)

### Generating Scaffolding

### Generating Entities

To generate an entity with default columns (id, createdAt, updatedAt and deletedAt) and graphql typedefs; run the following command from the root of your project:

`$ yarn caerus generate entity <name>`

Where `name` is the name of your entity.  Entities should be singular and use `-` for multiple words, e.g. `blog-post`.

### Generating Resolvers

To generate a resolver, as well as input and arguments types and test scaffold, which covers the basic CRUD actions; run the following command from the root of your project:

`$ yarn caerus generate resolver <name>`

Where `name` is the name of your resolver.  Resolvers should be singular and use `-` for multiple words, e.g. `blog-post`.

### Generating Views

To generate views and routes for a given resource, run the following command from the root of your project:

`$ yarn caerus generate views <name>`

Where `name` is the name of your resource.  Views should be singular and use `-` for multiple words, e.g. `blog-post`.

## Roadmap

Road to v1.0.0:

|Feature|Implemented?|
|---|:-:|
|Generate Entity Command|:white_check_mark:|
|Generate Resolver Command|:white_check_mark:|
|Generate Views Command|:white_check_mark:|
|Initialize Project Command|:white_check_mark:|
|Generate Resource Command||
|Generate Entity Column Argument Support||
|Better Code Splitting||
|SSR Support||
|Stack Template Support||
