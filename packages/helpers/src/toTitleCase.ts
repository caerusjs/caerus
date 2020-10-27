import { titleCase } from 'title-case';

export const toTitleCase = (name: string) => titleCase(name).replace('-', '');
