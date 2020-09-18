export const createCloneWithoutTypename = () => {
  return `import { isPlainObject, isArray } from 'lodash';

export default function cloneWithoutTypename<T>(obj: T): Omit<T, '__typename'> {
  if (!isPlainObject(obj)) {
    return obj;
  };
  let result: any = {};
  for (let key in obj) {
    if (key === '__typename') {
      continue;
    };
    let value = (obj as any)[key];
    if (isPlainObject(value)) {
      result[key] = cloneWithoutTypename(value);
    } else if (isArray(value)) {
      result[key] = value.map(cloneWithoutTypename);
    } else {
      result[key] = value;
    };
  };
  return result;
};
`;
};
