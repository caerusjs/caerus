import React from 'react'

import useGetExample from 'organisms/example/use-get-example'

import P from 'atoms/p'
import Error from 'molecules/error'
import Loading from 'molecules/loading'

const Example: React.FC = () => {
  const { data, loading, error } = useGetExample()

  if (loading) return <Loading />
  if (error || !data?.getExample) return <Error />
  
  return (
    <P>
      {data.getExample.content}
    </P>
  )
}

export default Example