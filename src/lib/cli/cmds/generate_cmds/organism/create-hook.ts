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
    Add${titleize(name)}Document, {
      update(cache, { data }) {
        const dataCache = get${titleize(name)}sCache({ cache })

        if (dataCache?.get${titleize(name)}s && data?.add${titleize(name)}) {
          dataCache.get${titleize(name)}s = [data.add${titleize(name)}, ...dataCache.get${titleize(name)}s]
          write${titleize(name)}sCache({ cache, data: dataCache })
        }
      },
    }
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
    Update${titleize(name)}Document, {
      update(cache, { data }) {
        const dataCache = get${titleize(name)}sCache({ cache })
  
        const indexOf${titleize(name)}ToUpdate = dataCache?.get${titleize(name)}s.findIndex(post => (
          post.id === data?.update${titleize(name)}.id
        ))
  
        if (typeof indexOf${titleize(name)}ToUpdate !== undefined && dataCache && data?.update${titleize(name)}) {
          dataCache.get${titleize(name)}s[indexOf${titleize(name)}ToUpdate as number] = data.update${titleize(name)}
          write${titleize(name)}sCache({ cache, data: dataCache })
        }
      },
    }
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
    Remove${titleize(name)}Document, {
      update(cache, { data }) {
        const dataCache = get${titleize(name)}sCache({ cache })

        if (dataCache?.get${titleize(name)}s && data?.remove${titleize(name)}) {
          const posts = dataCache.get${titleize(name)}s.filter(post => post.id !== data.remove${titleize(name)}.id)
          dataCache.get${titleize(name)}s = posts

          write${titleize(name)}sCache({ cache, data: dataCache })
        }
      },
    }
  )
}

export default useRemove${titleize(name)}
`)
  }
}