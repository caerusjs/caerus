import titleize from '../../../helpers/titleize'

export const createCache = (name: string, action: 'AddRemove' | 'Update') => {
  switch (action) {
    case 'AddRemove':
      return (`import { 
  IGet${titleize(name)}sQuery, 
  Get${titleize(name)}sDocument,
} from 'types/graphql'
import { DataProxy } from 'apollo-cache'

interface IGet${titleize(name)}sCache {
  cache: DataProxy
}

export const get${titleize(name)}sCache = ({ cache }: IGet${titleize(name)}sCache) => (
  cache.readQuery<IGet${titleize(name)}sQuery>({ 
    query: Get${titleize(name)}sDocument
  })
)

interface IWrite${titleize(name)}sCache extends IGet${titleize(name)}sCache {
  data: IGet${titleize(name)}sQuery
}

export const write${titleize(name)}sCache = ({ cache, data }: IWrite${titleize(name)}sCache) => (
  cache.writeQuery<IGet${titleize(name)}sQuery>({
    query: Get${titleize(name)}sDocument,
    data: data
  })
)`)

    case 'Update':
      return (`import { DataProxy } from 'apollo-cache'
import { 
  Get${titleize(name)}Document,
  IGet${titleize(name)}Query,
  IGet${titleize(name)}QueryVariables, 
} from 'types/graphql'

interface IGet${titleize(name)}Cache {
  id: string
  cache: DataProxy
}

export const get${titleize(name)}Cache = ({ id, cache }: IGet${titleize(name)}Cache) => (
  cache.readQuery<IGet${titleize(name)}Query, IGet${titleize(name)}QueryVariables>({ 
    query: Get${titleize(name)}Document, 
    variables: { 
      id: id
    }
  })
)

interface IWrite${titleize(name)}Cache extends IGet${titleize(name)}Cache {
  id: string
  cache: DataProxy
  data: IGet${titleize(name)}Query
}

export const write${titleize(name)}Cache = ({ id, cache, data }: IWrite${titleize(name)}Cache) => (
  cache.writeQuery<IGet${titleize(name)}Query, IGet${titleize(name)}QueryVariables>({
    query: Get${titleize(name)}Document,
    variables: { 
      id: id
    },
    data: data
  })
)
`)
  }
}
