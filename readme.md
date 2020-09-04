# Caerus Framework
![](https://github.com/krisquigley/caerus/workflows/Node.js%20CI/badge.svg)

## What is it?
An opinionated framework for building web applications with the goal of rapid development and low maintenence.

The stack will evolve over time by adopting newer and better technologies, in order to improve performance and power; whilst identifying common, stable patterns for abstraction and generation, leading to increases in productivity.

## Project Goal
Productivity, Power and Performance. 

## Values
- Fast
- Extensible
- Maintainable
- Productive
- Experimental

## What Caerus Provides
 - A default tech stack proven to work together, which provide rapid development, low maintenence, security and accessibility out of the box.
 - Atomic approach to frontend development.
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
        {resource}.routes.tsx
        index.tsx
      support/
        fixtures/
      views/
        {resource}/
          new.view.tsx
          edit.view.tsx
          show.view.tsx
          index.view.tsx
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
  - End-to-end acceptance tests through `jest-cucumber` (WIP)
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

## Initializing a new project

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

## Generating your First Resource

In this example we will be generating a resource called `post` which will be used for adding posts to our project.

### Running the Generate Resource Command

From the root folder of your application run the following command:

`$ yarn caerus g resource post`

This will then generate the relevant files and folders associated with your resource.

* In a future version of Caerus the following steps will be automated by the generator. The proposed API being `yarn caerus g resource <name> [column:type:options] `.  For example, `yarn caerus g resource post title:string author:string:null`, would generate a Post resource with the columns title and author; both of which are strings with author being nullable.

### Adding extra columns to our entity

Lets start by adding a title column to our Post entity.

```typescript
@Field()
@Column()
title: string
```

`@Field()` Exposes the column for the GraphQL API.
`@Column()` Defines the column for the database.

See https://typeorm.io/#/entities for more information about defining entities for the database, and https://typegraphql.com/docs/types-and-fields.html about exposing GraphQL fields. 

Update `post.entity.ts` to the following:

```typescript
import { 
  Entity, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, 
  Column, 
} from 'typeorm'
import {
  ObjectType,
  Field,
  ID,
} from 'type-graphql'

@ObjectType()
@Entity()
export class Post {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string
  
  @Field()
  @Column()
  title: string

  @CreateDateColumn({ type: 'date' })
  createdAt: Date
  
  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date
}
```

### Create a New Database Migration

From the root of your server folder run the following command:

`$ yarn typeorm migration:generate -n AddPosts`

This will create a new db migration based on the entity details, which will be automatically run once the server restarts.

### Updating Resolver Input

Next we need to update our resolver input to be aware of the new title column.

Within `post.input.ts`, update the classes to the following:

```typescript
@InputType()
export class AddPostInput implements Partial<Post> {
  @Field()
  title: string
}

@InputType()
export class UpdatePostInput implements Partial<Post> {
  @Field(type => ID)
  id: string

  @Field()
  title: string
}
```

### Updating Clientside GraphQL Documents

Update `get-post.graphql` to the following:

```typescript
query getPost($id: ID!) {
  getPost(id: $id) {
    id
    title
  }
}
```

Update `get-posts.graphql` to the following:

```typescript
query getPosts {
  getPosts {
    id
    title
  }
}
```

Update `add-post.graphql` to the following:

```typescript
mutation AddPost($post: AddPostInput!) {
  addPost(post: $post) {
    id
    title
  }
}
```

Update `update-post.graphql` to the following:

```typescript
mutation UpdatePost($post: UpdatePostInput!) {
  updatePost(post: $post) {
    id
    title
  }
}
```
  
* In a future version of Caerus, these documents will share a common fragment so that only one document need updating.

### Adding a Title Field to our Form

Within `post-form-fields/index.tsx` add the following `Field` **AND** `yup` validation:

```typescript
import React from 'react'
import { object, string } from 'yup'

import { IFormFields } from 'types/props'
import { Field } from 'formik'

export const postFormSchema = object().shape({
  title: string().required()
})

const PostFormFields: React.FC<IFormFields> = ({ errors, handleChange, values }) => {
  return (
    <>
        <label htmlFor='title'>Title *</label>
        <Field
          name='title'
          type='text'
          aria-labelledby='title'
          placeholder='Title'
          value={values.title}
          onChange={handleChange}
        />
        <div>
          {errors.name}
        </div>
    </>
  )
}


export default PostFormFields
```

This adds a title field to our form and also validates it's presence when submitting the form.  For more information on form fields see https://formik.org/docs/api/field and https://github.com/jquense/yup about validation.

### Adding a Default Value for the Title Field

Within `add-post/index.tsx`, add title to the list of initial values:

```typescript
  const initialPostValues: IAddPostInput = {
    title: ''
  }
```

### Adding the Post Routes to our application

Update `routes/index.tsx` to the following:

```typescript
import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Loading from 'molecules/loading'

const ExampleRoutes = lazy(() => import('routes/example.routes'))
const PostRoutes = lazy(() => import('routes/post.routes'))

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/posts' component={PostRoutes} />
          <Route path='/' component={ExampleRoutes} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
```

Voila, you should now be able to visit `http://localhost:3000/posts` to start adding some new posts!

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

To generate an entity with default columns (id, createdAt and updatedAt) and graphql typedefs; run the following command from the root of your project:

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

### Generating Resources

To generate an entity, resolvers, organisms, views, routes and tests for a given resource, run the following command from the root of your project:

`$ yarn caerus generate resource <name>`

Where `name` is the name of your resource.  Views should be singular and use `-` for multiple words, e.g. `blog-post`.

## Roadmap

Road to v1.0.0:

|Feature|Implemented?|
|---|:-:|
|Generate Entity Command|:white_check_mark:|
|Generate Resolver Command|:white_check_mark:|
|Generate Views Command|:white_check_mark:|
|Initialize Project Command|:white_check_mark:|
|Generate Resource Command|:white_check_mark:|
|Generate Entity Column Argument Support||
|Generate Resource with Column Argument Support||
|More Atoms and Molecules||
|Default Styling||
|Theme Support||
|Feature Tests||
|Better Code Splitting||
|SSR Support||
|Stack Template Support||
