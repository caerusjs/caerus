import { useQuery } from '@apollo/client';
import { GetAtomQuery, GetAtomDocument } from 'types/graphql';

const useGetAtom = () => {
  return useQuery<GetAtomQuery>(GetAtomDocument);
};

export default useGetAtom;
