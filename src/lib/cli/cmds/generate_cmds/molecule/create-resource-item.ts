import titleize from '../../../helpers/titleize'

export const createResourceItem = (name: string) => {
  return (`import React from 'react'

import { 
  IGet${titleize(name)}sQuery,
} from 'types/graphql'

interface I${titleize(name)}ItemProps {
  ${name}: IGet${titleize(name)}sQuery['get${titleize(name)}'][0]
  handleRemove: () => void
}

const ${titleize(name)}Item: React.FC<{I${titleize(name)}ItemProps}> = ({ handleRemove, ${name} }) => {
  return (
    <P>
      ${name}.id
      <Link
        to={\`/\$\{${titleize(name)}.id}\`}
      >
        <A>View ${titleize(name)}</A>
      </Link>
    </P>
  )
}


export default ${titleize(name)}Item
`)
}