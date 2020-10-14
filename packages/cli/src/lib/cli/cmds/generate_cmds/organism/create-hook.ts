import { titleize } from '@caerusjs/helpers';

export const createHook = (
  name: string,
  action: 'GetAll' | 'Get' | 'Add' | 'Update' | 'Remove',
) => {
  switch (action) {
    case 'GetAll':
      return `import { useQuery } from '@apollo/client';

import { 
  Get${titleize(name)}sQuery, 
  Get${titleize(name)}sDocument
} from 'types/graphql';

const useGet${titleize(name)}s = () => {
  return useQuery<Get${titleize(name)}sQuery>(
    Get${titleize(name)}sDocument
  );
};

export default useGet${titleize(name)}s;
`;

    case 'Get':
      return `import { useQuery } from '@apollo/client';
import {
  Get${titleize(name)}Query,
  Get${titleize(name)}QueryVariables,
  Get${titleize(name)}Document,
} from 'types/graphql';

const useGet${titleize(name)} = (id: string) => {
  return useQuery<Get${titleize(name)}Query, Get${titleize(
        name,
      )}QueryVariables>(Get${titleize(name)}Document, {
    variables: {
      id: id,
    },
  });
};

export default useGet${titleize(name)};
`;

    case 'Add':
      return `import { useMutation } from '@apollo/client';

import { get${titleize(name)}sCache, write${titleize(
        name,
      )}sCache } from 'cache/${name}s.cache';

import {
  Add${titleize(name)}Document,
  Add${titleize(name)}Mutation,
  Add${titleize(name)}MutationVariables,
} from 'types/graphql';

const useAdd${titleize(name)} = () => {
  return useMutation<Add${titleize(name)}Mutation, Add${titleize(
        name,
      )}MutationVariables>(
    Add${titleize(name)}Document,
    {
      update(cache, { data }) {
        const dataCache = get${titleize(name)}sCache({ cache });

        if (dataCache?.get${titleize(name)}s && data?.add${titleize(name)}) {
          const updatedData = [data.add${titleize(
            name,
          )}].concat(dataCache.get${titleize(name)}s);

          write${titleize(name)}sCache({
            cache,
            data: {
              get${titleize(name)}s: updatedData,
            },
          });
        }
      },
    },
  );
};

export default useAdd${titleize(name)};
      `;

    case 'Update':
      return `import { useMutation } from '@apollo/client';

import {
  Update${titleize(name)}Document,
  Update${titleize(name)}Mutation,
  Update${titleize(name)}MutationVariables,
} from 'types/graphql';

const useUpdate${titleize(name)} = () => {
  return useMutation<Update${titleize(name)}Mutation, Update${titleize(
        name,
      )}MutationVariables>(
    Update${titleize(name)}Document,
  );
};

export default useUpdate${titleize(name)};
      
`;

    case 'Remove':
      return `import { useMutation } from '@apollo/client';

import { get${titleize(name)}sCache, write${titleize(
        name,
      )}sCache } from 'cache/${name}s.cache';

import {
  Remove${titleize(name)}MutationVariables,
  Remove${titleize(name)}Mutation,
  Remove${titleize(name)}Document
} from 'types/graphql';

const useRemove${titleize(name)} = () => {
  return useMutation<Remove${titleize(name)}Mutation, Remove${titleize(
        name,
      )}MutationVariables>(
    Remove${titleize(name)}Document, {
      update(cache, { data }) {
        const dataCache = get${titleize(name)}sCache({ cache });

        if (dataCache?.get${titleize(name)}s && data?.remove${titleize(name)}) {
          const ${name}s = dataCache.get${titleize(
        name,
      )}s.filter(${name} => ${name}.id !== data.remove${titleize(name)}.id)

          write${titleize(name)}sCache({ cache, data: { get${titleize(
        name,
      )}s: ${name}s }})
        };
      },
    }
  );
};

export default useRemove${titleize(name)};
`;
  }
};
