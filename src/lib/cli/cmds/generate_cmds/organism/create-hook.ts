export const createHook = (name: string, action: string) => {
  switch (action) {
    case 'Add':
      return (`import { useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'

import {
  AddVideoDocument,
  IAddVideoMutation,
  IAddVideoMutationVariables
} from 'types/graphql'

const useAddVideo = () => {
  return useMutation<IAddVideoMutation, IAddVideoMutationVariables>(
    AddVideoDocument
  )
}

export default useAddVideo
      `)

  }
}