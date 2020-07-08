export const createClientIndex = () => {
  return (`import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationRoutes from 'routes'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { BatchHttpLink } from 'apollo-link-batch-http'

import cloneWithoutTypename from 'lib/clone-without-typename'

// Use context for this instead and pass it own to app?
const networkErrors: any[] = []

// Links
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      switch (true) {
        case /Could not find/i.test(error.message):
          return ReactDOM.render(
            <div>Page not found</div>,
            document.getElementById('root')
          )

        case /Argument Validation Error/i.test(error.message):
          const validationReason = error.extensions?.exception.validationErrors.map((error: any) => {
            return { field: error.property, message: Object.values(error.constraints).join(',') }
          })
          error.message = JSON.stringify(validationReason)
          break

        default:
          networkErrors.concat(error)
          break
      }
    })

    if (networkError) {
      // If there is an error then show it on the page in a toast
      networkErrors.concat(networkError)
    }
  }
})

const httpLink = new BatchHttpLink({ uri: \`${process.env.REACT_APP_SERVER_HOST}/graphql\` })

// Required to remove __typename from nested resources. See: https://github.com/apollographql/apollo-feature-requests/issues/6
const typenameMiddleware = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = cloneWithoutTypename(operation.variables)
  }
  return forward(operation)
})

const links = ApolloLink.from([
  typenameMiddleware,
  errorLink,
  httpLink
])

const client = new ApolloClient({
  link: links,
  cache: new InMemoryCache()
})

const networkErrorToasts = () => {
  return networkErrors.map(networkError => {
    return <div>{networkError}</div>
  })
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApplicationRoutes />
    {networkErrorToasts()}
  </ApolloProvider>,
  document.getElementById('root')
)`)
}