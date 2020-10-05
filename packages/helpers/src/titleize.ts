import { titleCase } from 'title-case';

export const titleize = (name: string) => titleCase(name).replace('-', '');
