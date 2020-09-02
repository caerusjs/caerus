import titleize from '../../../helpers/titleize'

export const createResourceItem = (name: string) => {
  return (`import React from 'react'

import A from 'atoms/a'
import P from 'atoms/p'
import Button from 'atoms/button'

import { Link } from 'react-router-dom'

import { 
  IGet${titleize(name)}sQuery,
} from 'types/graphql'

interface I${titleize(name)}ItemProps {
  ${name}: IGet${titleize(name)}sQuery['get${titleize(name)}s'][0]
  handleRemove: () => void
}

const ${titleize(name)}Item: React.FC<I${titleize(name)}ItemProps> = ({ handleRemove, ${name} }) => {
  return (
    <>
      <P>{${name}.id}</P>
      <P>
        <Link
          to={\`/${name}s/\$\{${name}.id}\`}
        >
          <A>View ${titleize(name)}</A>
        </Link>
      </P>
      <P>
      <Link
        to={\`/${name}s/\$\{${name}.id}/edit\`}
      >
        <A>Edit ${titleize(name)}</A>
      </Link>
    </P>
      <Button onClick={handleRemove}>Remove</Button>
    </>
  )
}


export default ${titleize(name)}Item
`)
}