import { toTitleCase } from '@caerusjs/client-helpers';

export const createDocument = (
  name: string,
  action: 'GetAll' | 'Get' | 'Add' | 'Update' | 'Remove',
) => {
  switch (action) {
    case 'GetAll':
      return `query get${toTitleCase(name)}s {
  get${toTitleCase(name)}s {
    id
  }
}`;

    case 'Get':
      return `query get${toTitleCase(name)}($id: ID!) {
  get${toTitleCase(name)}(id: $id) {
    id
  }
}`;

    case 'Add':
      return `mutation Add${toTitleCase(name)}($${name}: Add${toTitleCase(
        name,
      )}Input!) {
  add${toTitleCase(name)}(${name}: $${name}) {
    id
  }
}
`;

    case 'Update':
      return `mutation Update${toTitleCase(name)}($${name}: Update${toTitleCase(
        name,
      )}Input!) {
  update${toTitleCase(name)}(${name}: $${name}) {
    id
  }
}
`;

    case 'Remove':
      return `mutation Remove${toTitleCase(name)}($${name}: Remove${toTitleCase(
        name,
      )}Input!) {
  remove${toTitleCase(name)}(${name}: $${name}) {
    id
  }
}
`;
  }
};
