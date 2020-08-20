import titleize from '../../../helpers/titleize'

export const createHook = (name: string, action: 'GetAll' | 'Get' | 'Add' | 'Update' | 'Remove') => {
  switch (action) {
    case 'GetAll':
      return (`import { useQuery } from '@apollo/react-hooks'

import { 
  IGet${titleize(name)}sQuery, 
  Get${titleize(name)}sDocument 
} from 'types/graphql'

const useGet${titleize(name)}s = () => {
  return useQuery<IGet${titleize(name)}sQuery>(
    Get${titleize(name)}sDocument
  )
}

export default useGet${titleize(name)}s
`)

    case 'Get':
      return (`import { useQuery } from '@apollo/react-hooks'
import { 
  IGet${titleize(name)}Query, 
  IGet${titleize(name)}QueryVariables, 
  Get${titleize(name)}Document 
} from 'types/graphql'

const useGet${titleize(name)} = (id: string) => {
  return useQuery<IGet${titleize(name)}Query, IGet${titleize(name)}QueryVariables>(
    Get${titleize(name)}Document, { 
    variables: { 
      id: id
    } 
  })
}

export default useGet${titleize(name)}
`)

    case 'Add':
      return (`import { useMutation } from '@apollo/react-hooks'

import {
  Add${titleize(name)}Document,
  IAdd${titleize(name)}Mutation,
  IAdd${titleize(name)}MutationVariables
} from 'types/graphql'

const useAdd${titleize(name)} = () => {
  return useMutation<IAdd${titleize(name)}Mutation, IAdd${titleize(name)}MutationVariables>(
    Add${titleize(name)}Document
  )
}

export default useAdd${titleize(name)}
      `)

    case 'Update':
      return (`import { useMutation } from '@apollo/react-hooks'

import { 
  Update${titleize(name)}Document, 
  IUpdate${titleize(name)}Mutation, 
  IUpdate${titleize(name)}MutationVariables 
} from 'types/graphql'

const useUpdate${titleize(name)} = () => {
  return useMutation<IUpdate${titleize(name)}Mutation, IUpdate${titleize(name)}MutationVariables>(
    Update${titleize(name)}Document,
  )
}

export default useUpdate${titleize(name)}
`)

    case 'Remove':
      return (`import { useMutation } from '@apollo/react-hooks'

import {
  IRemove${titleize(name)}MutationVariables,
  IRemove${titleize(name)}Mutation,
  Remove${titleize(name)}Document
} from 'types/graphql'

const useRemove${titleize(name)} = () => {
  return useMutation<IRemove${titleize(name)}Mutation, IRemove${titleize(name)}MutationVariables>(
    Remove${titleize(name)}Document
  )
}

export default useRemove${titleize(name)}
`)
  }
}