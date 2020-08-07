import titleize from '../../../helpers/titleize'

enum Type {
  GET,
  ADD,
  UPDATE
}

export const actions = [Type.GET, Type.ADD, Type.UPDATE]

export const createOrganism = (name: string, type: Type) => {
  switch (type) {
    case Type.GET:
      return (`import React from 'react'

      import useGet${titleize(name)} from 'organisms/get${titleize(name)}/use-get-${name}'
      
      import P from 'atoms/p'
      import Error from 'molecules/error'
      import Loading from 'molecules/loading'
      
      const get${titleize(name)}: React.FC = (id: string) => {
        const { data, loading, error } = useGet${titleize(name)}(id)
      
        if (loading) return <Loading />
        if (error || !data?.get${titleize(name)}) return <Error />
        
        return (
          <P>
            {data.get${titleize(name)}.id}
          </P>
        )
      }
      
      export default get${titleize(name)}`)

      // TODO
    case Type.ADD:
      return (`import React from 'react'

      import useAdd${titleize(name)} from 'organisms/add${titleize(name)}/use-add-${name}'
      
      import P from 'atoms/p'
      import Error from 'molecules/error'
      import Loading from 'molecules/loading'
      
      const add${titleize(name)}: React.FC = (id: string) => {
        const { data, loading, error } = useAdd${titleize(name)}(id)
      
        if (loading) return <Loading />
        if (error || !data?.get${titleize(name)}) return <Error />
        
        return (
          <P>
            {data.add${titleize(name)}.id}
          </P>
        )
      }
      
      export default add${titleize(name)}`)

    case Type.UPDATE:
      return (``)
  }

}
