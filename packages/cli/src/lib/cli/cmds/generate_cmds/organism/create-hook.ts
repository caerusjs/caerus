import { toTitleCase } from '@caerusjs/client-helpers';

export const createHook = (
  name: string,
  action: 'GetAll' | 'Get' | 'Add' | 'Update' | 'Remove',
) => {
  switch (action) {
    case 'GetAll':
      return `import { useQuery } from '@apollo/client';

import { 
  Get${toTitleCase(name)}sQuery, 
  Get${toTitleCase(name)}sDocument
} from 'types/graphql';

const useGet${toTitleCase(name)}s = () => {
  return useQuery<Get${toTitleCase(name)}sQuery>(
    Get${toTitleCase(name)}sDocument
  );
};

export default useGet${toTitleCase(name)}s;
`;

    case 'Get':
      return `import { useQuery } from '@apollo/client';
import {
  Get${toTitleCase(name)}Query,
  Get${toTitleCase(name)}QueryVariables,
  Get${toTitleCase(name)}Document,
} from 'types/graphql';

const useGet${toTitleCase(name)} = (id: string) => {
  return useQuery<Get${toTitleCase(name)}Query, Get${toTitleCase(
        name,
      )}QueryVariables>(Get${toTitleCase(name)}Document, {
    variables: {
      id: id,
    },
  });
};

export default useGet${toTitleCase(name)};
`;

    case 'Add':
      return `import { useMutation } from '@apollo/client';

import { get${toTitleCase(name)}sCache, write${toTitleCase(
        name,
      )}sCache } from 'cache/${name}s.cache';

import {
  Add${toTitleCase(name)}Document,
  Add${toTitleCase(name)}Mutation,
  Add${toTitleCase(name)}MutationVariables,
} from 'types/graphql';

const useAdd${toTitleCase(name)} = () => {
  return useMutation<Add${toTitleCase(name)}Mutation, Add${toTitleCase(
        name,
      )}MutationVariables>(
    Add${toTitleCase(name)}Document,
    {
      update(cache, { data }) {
        const dataCache = get${toTitleCase(name)}sCache({ cache });

        if (dataCache?.get${toTitleCase(name)}s && data?.add${toTitleCase(
        name,
      )}) {
          const updatedData = [data.add${toTitleCase(
            name,
          )}].concat(dataCache.get${toTitleCase(name)}s);

          write${toTitleCase(name)}sCache({
            cache,
            data: {
              get${toTitleCase(name)}s: updatedData,
            },
          });
        }
      },
    },
  );
};

export default useAdd${toTitleCase(name)};
      `;

    case 'Update':
      return `import { useMutation } from '@apollo/client';

import {
  Update${toTitleCase(name)}Document,
  Update${toTitleCase(name)}Mutation,
  Update${toTitleCase(name)}MutationVariables,
} from 'types/graphql';

const useUpdate${toTitleCase(name)} = () => {
  return useMutation<Update${toTitleCase(name)}Mutation, Update${toTitleCase(
        name,
      )}MutationVariables>(
    Update${toTitleCase(name)}Document,
  );
};

export default useUpdate${toTitleCase(name)};
      
`;

    case 'Remove':
      return `import { useMutation } from '@apollo/client';

import { get${toTitleCase(name)}sCache, write${toTitleCase(
        name,
      )}sCache } from 'cache/${name}s.cache';

import {
  Remove${toTitleCase(name)}MutationVariables,
  Remove${toTitleCase(name)}Mutation,
  Remove${toTitleCase(name)}Document
} from 'types/graphql';

const useRemove${toTitleCase(name)} = () => {
  return useMutation<Remove${toTitleCase(name)}Mutation, Remove${toTitleCase(
        name,
      )}MutationVariables>(
    Remove${toTitleCase(name)}Document, {
      update(cache, { data }) {
        const dataCache = get${toTitleCase(name)}sCache({ cache });

        if (dataCache?.get${toTitleCase(name)}s && data?.remove${toTitleCase(
        name,
      )}) {
          const ${name}s = dataCache.get${toTitleCase(
        name,
      )}s.filter(${name} => ${name}.id !== data.remove${toTitleCase(name)}.id)

          write${toTitleCase(name)}sCache({ cache, data: { get${toTitleCase(
        name,
      )}s: ${name}s }})
        };
      },
    }
  );
};

export default useRemove${toTitleCase(name)};
`;
  }
};
