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

    case Type.ADD:
      return (`import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  IAdd${titleize(name)}Input
} from 'types/graphql'

import useAdd${titleize(name)} from 'organisms/add-${name}/use-add-${name}'

import ResourceForm from 'molecules/resource-form'
import ${titleize(name)}FormFields, { 
  ${name}FormSchema 
} from 'molecules/${name}-form-fields'

const Add${titleize(name)}: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory()
  const [add${titleize(name)}] = useAdd${titleize(name)}(id)

  const add${titleize(name)}Mutation = async (values: IAdd${titleize(name)}Input) => {
    const ${name} = await add${titleize(name)}({
      variables: {
        ${name}: {
          
        }
      }
    })

    history.push(\`/${name}s/\${${name}.data?.add${titleize(name)}.id}/edit\`)
  }

  const initial${titleize(name)}Values: IAdd${titleize(name)}Input = {
    
  }

  const handleReturn = () => {
    history.push(\`/\`)
  }

  const resource = {
    initialValues: initial${titleize(name)}Values,
    handleSubmit: add${titleize(name)}Mutation,
    handleReturn: handleReturn,
    validation: ${name}FormSchema,
    name: '${titleize(name)}',
    action: 'new'
  }

  return (
    <ResourceForm resource={resource} FormFields={${titleize(name)}FormFields} />
  )
}

export default Add${titleize(name)}
      `)

    case Type.UPDATE:
      return (`import React from 'react'
      import { useHistory } from 'react-router-dom'
      
      import { IUpdate${titleize(name)}Input } from 'types/graphql'
      
      import useUpdate${titleize(name)} from 'organisms/update-${name}/use-update-${name}'
      import useGet${titleize(name)} from 'organisms/update-${name}/use-get-${name}'
      
      import Loading from 'molecules/loading'
      import Error from 'molecules/error'
      import ${titleize(name)}FormFields, { ${name}FormSchema } from 'molecules/${name}-form-fields'
      import ResourceForm from 'molecules/resource-form'
      
      const Update${titleize(name)}: React.FC<{ ${name}Id: string, tenant: string }> = ({ ${name}Id, tenant }) => {
        const history = useHistory()
        const handleReturn = () => {
          history.push(\`/${name}s\`)
        }
        const [update${titleize(name)}] = useUpdate${titleize(name)}(tenant)
        
        const { loading, error, data } = useGet${titleize(name)}ById(${name}Id)
        
        if (loading) return <Loading />
        if (error || !data?.get${titleize(name)}ById) return <Error />
        
        const initial${titleize(name)}Values: IUpdate${titleize(name)}Input = {
          id: ${name}Id,
          tenant: tenant,
          name: data.get${titleize(name)}ById.name,
          code: data.get${titleize(name)}ById.code,
          utmParams: data.get${titleize(name)}ById.utmParams
        }
        
        const update${titleize(name)}Mutation = async (values: IUpdate${titleize(name)}Input) => {
          await update${titleize(name)}({
            variables: {
              ${name}: {
                id: ${name}Id,
                tenant: tenant,
                name: values.name,
                code: values.code,
                utmParams: values.utmParams
              }
            }
          })
        
          handleReturn()
        }
        
        const resource = {
          name: '${titleize(name)}',
          action: 'edit',
          handleReturn: handleReturn,
          validation: ${name}FormSchema,
          initialValues: initial${titleize(name)}Values,
          handleSubmit: update${titleize(name)}Mutation
        }
      
        return (
          <ResourceForm resource={resource} FormFields={${titleize(name)}FormFields} />
        )
      
      }  
      
      export default Update${titleize(name)}      
`)
  }

}
