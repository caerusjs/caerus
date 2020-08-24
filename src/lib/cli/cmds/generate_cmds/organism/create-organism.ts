import titleize from '../../../helpers/titleize'

export const createOrganism = (name: string, action: 'GetAll' | 'Get' | 'Add' | 'Update') => {
  switch (action) {
    case 'GetAll':
      return (`import React from 'react'

import useGet${titleize(name)}s from 'organisms/get-${name}s/use-get-${name}s'

import P from 'atoms/p'
import Error from 'molecules/error'
import Loading from 'molecules/loading'
import ${titleize(name)}Item from 'molecules/${name}-item'

const Get${titleize(name)}s: React.FC = () => {
  const { data, loading, error } = useGet${titleize(name)}s()
  const [remove${titleize(name)}] = useRemove${titleize(name)}()

  if (loading) return <Loading />
  if (error || !data?.get${titleize(name)}s) return <Error />

  const { get${titleize(name)}s } = data

  const ${titleize(name)}s = () => {
    if (!get${titleize(name)}s?.length) {
      return (
        <P>Please add a ${titleize(name)}</P>
      )
    } else {
      return get${titleize(name)}s.map((${name}) => {
        const handleRemove = () => {
          remove${titleize(name)}({
            variables: {
              ${name}: {
                id: ${name}.id
              }
            }
          })
        }

        return (
          <${titleize(name)}Item ${name}={${name}} handleRemove={handleRemove} />
        )
      })
    }
  }
  
  return (
    <>
      { ${titleize(name)}s() }
    </>
  )
}

export default Get${titleize(name)}s`)

    case 'Get':
      return (`import React from 'react'

import useGet${titleize(name)} from 'organisms/get-${name}/use-get-${name}'

import P from 'atoms/p'
import Error from 'molecules/error'
import Loading from 'molecules/loading'

const Get${titleize(name)}: React.FC<{ id: string }> = ({ id }) => {
  const { data, loading, error } = useGet${titleize(name)}(id)

  if (loading) return <Loading />
  if (error || !data?.get${titleize(name)}) return <Error />
  
  return (
    <P>
      {data.get${titleize(name)}.id}
    </P>
  )
}

export default Get${titleize(name)}
`)

    case 'Add':
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

const Add${titleize(name)}: React.FC = () => {
  const history = useHistory()
  const [add${titleize(name)}] = useAdd${titleize(name)}()

  const add${titleize(name)}Mutation = async (values: IAdd${titleize(name)}Input) => {
    await add${titleize(name)}({
      variables: {
        ${name}: values
      }
    })

    history.push(\`/${name}s/\`)
  }

  const initial${titleize(name)}Values: IAdd${titleize(name)}Input = {
    // add your initial values here
  }

  const handleReturn = () => {
    history.push(\`/${name}s\`)
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

    case 'Update':
      return (`import React from 'react'
import { useHistory } from 'react-router-dom'

import { IUpdate${titleize(name)}Input } from 'types/graphql'

import useUpdate${titleize(name)} from 'organisms/update-${name}/use-update-${name}'
import useGet${titleize(name)} from 'organisms/get-${name}/use-get-${name}'

import Loading from 'molecules/loading'
import Error from 'molecules/error'
import ${titleize(name)}FormFields, { ${name}FormSchema } from 'molecules/${name}-form-fields'
import ResourceForm from 'molecules/resource-form'

const Update${titleize(name)}: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory()
  const handleReturn = () => {
    history.push(\`/${name}s\`)
  }
  const [update${titleize(name)}] = useUpdate${titleize(name)}()
  
  const { loading, error, data } = useGet${titleize(name)}(id)
  
  if (loading) return <Loading />
  if (error || !data?.get${titleize(name)}ById) return <Error />
  
  const initial${titleize(name)}Values: IUpdate${titleize(name)}Input = {
    id: id,
    // Add your initial values here
  }
  
  const update${titleize(name)}Mutation = async (values: IUpdate${titleize(name)}Input) => {
    await update${titleize(name)}({
      variables: {
        ${name}: values
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
