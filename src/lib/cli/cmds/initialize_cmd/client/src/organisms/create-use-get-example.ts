export const createUseGetExample = () => {
  return (`import { useQuery } from '@apollo/client';
import { GetExampleDocument, GetExampleQuery } from 'types/graphql';

const useGetExample = () => {
  return useQuery<GetExampleQuery>(GetExampleDocument);
};

export default useGetExample;
`)
}