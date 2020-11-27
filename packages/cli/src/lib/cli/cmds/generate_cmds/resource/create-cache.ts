import { toTitleCase } from '@caerusjs/client-helpers';

export const createCache = (name: string, action: 'AddRemove') => {
  switch (action) {
    case 'AddRemove':
      return `import { Get${toTitleCase(name)}sQuery, Get${toTitleCase(
        name,
      )}sDocument } from 'types/graphql';
import { DataProxy } from '@apollo/client/cache';

interface IGet${toTitleCase(name)}sCache {
  cache: DataProxy;
}

export const get${toTitleCase(name)}sCache = ({ cache }: IGet${toTitleCase(
        name,
      )}sCache) =>
  cache.readQuery<Get${toTitleCase(name)}sQuery>({
    query: Get${toTitleCase(name)}sDocument,
  });

interface Write${toTitleCase(name)}sCache {
  cache: DataProxy;
  data: Get${toTitleCase(name)}sQuery;
}

export const write${toTitleCase(
        name,
      )}sCache = ({ cache, data }: Write${toTitleCase(name)}sCache) =>
  cache.writeQuery<Get${toTitleCase(name)}sQuery>({
    query: Get${toTitleCase(name)}sDocument,
    data: data,
  });
`;
  }
};
