import titleize from '../../../helpers/titleize';

export const createCache = (name: string, action: 'AddRemove') => {
  switch (action) {
    case 'AddRemove':
      return `import { Get${titleize(name)}sQuery, Get${titleize(
        name,
      )}sDocument } from 'types/graphql';
import { DataProxy } from '@apollo/client/cache';

interface IGet${titleize(name)}sCache {
  cache: DataProxy;
}

export const get${titleize(name)}sCache = ({ cache }: IGet${titleize(
        name,
      )}sCache) =>
  cache.readQuery<Get${titleize(name)}sQuery>({
    query: Get${titleize(name)}sDocument,
  });

interface Write${titleize(name)}sCache {
  cache: DataProxy;
  data: Get${titleize(name)}sQuery;
}

export const write${titleize(name)}sCache = ({ cache, data }: Write${titleize(
        name,
      )}sCache) =>
  cache.writeQuery<Get${titleize(name)}sQuery>({
    query: Get${titleize(name)}sDocument,
    data: data,
  });
`;
  }
};
