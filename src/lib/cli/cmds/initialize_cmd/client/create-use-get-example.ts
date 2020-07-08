export const createUseGetExample = () => {
  return (`import { useQuery } from '@apollo/react-hooks'
import { 
  GetExampleDocument,
  IGetExampleQuery
} from 'types/graphql'

const useGetExample = () => {
  return useQuery<IGetExampleQuery>(
    GetExampleDocument
  )
}

export default useGetExample`)
}